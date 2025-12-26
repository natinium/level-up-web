// msw/handlers/auth.ts
// Authentication-related API request handlers

import { http, HttpResponse } from "msw";
import { users } from "../db/user";

interface LoginRequestBody {
  email: string;
  password?: string;
}

export const authHandlers = [
  http.post<never, LoginRequestBody>("/api/auth/login", async ({ request }) => {
    const { email, password } = await request.json();

    // Find user by email
    const user = users.find((u) => u.email === email);

    if (!user || user.password !== password) {
      return new HttpResponse(null, {
        status: 401,
        statusText: "Invalid credentials",
      });
    }

    // In a real app, you would generate a proper JWT
    const token = `fake-jwt-token-${user.id}`;

    return HttpResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    });
  }),

  http.post("/api/auth/logout", () => {
    return new HttpResponse(null, { status: 200 });
  }),

  http.get("/api/auth/me", ({ request }) => {
    // Extract token from Authorization header
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.split(" ")[1]; // Bearer <token>

    if (!token || !token.startsWith("fake-jwt-token-")) {
      return new HttpResponse(null, {
        status: 401,
        statusText: "Unauthorized",
      });
    }

    // Extract user ID from token
    const userId = Number(token.split("-").pop());
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return new HttpResponse(null, {
        status: 401,
        statusText: "Unauthorized",
      });
    }

    return HttpResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  }),
];
