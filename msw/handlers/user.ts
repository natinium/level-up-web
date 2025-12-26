// msw/handlers/user.ts
// User-related API request handlers

import { http, HttpResponse } from "msw";
import { users, type User } from "../db/user";

export const userHandlers = [
  http.get("/api/users", () => {
    return HttpResponse.json(users);
  }),

  http.get("/api/users/:id", ({ params }) => {
    const { id } = params;
    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(user);
  }),

  http.post<never, User>("/api/users", async ({ request }) => {
    const newUser = await request.json();
    users.push({ ...newUser, id: users.length + 1 });
    return HttpResponse.json({ ...newUser, id: users.length }, { status: 201 });
  }),

  http.put<never, Partial<User>>(
    "/api/users/:id",
    async ({ params, request }) => {
      const { id } = params;
      const updatedUserData = await request.json();
      const userIndex = users.findIndex((user) => user.id === Number(id));

      if (userIndex === -1) {
        return new HttpResponse(null, { status: 404 });
      }

      users[userIndex] = { ...users[userIndex], ...updatedUserData };
      return HttpResponse.json(users[userIndex]);
    },
  ),

  http.delete("/api/users/:id", ({ params }) => {
    const { id } = params;
    const userIndex = users.findIndex((user) => user.id === Number(id));

    if (userIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    users.splice(userIndex, 1);
    return new HttpResponse(null, { status: 200 });
  }),
];
