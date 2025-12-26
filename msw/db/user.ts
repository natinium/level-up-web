// msw/db/user.ts
// Mock user data for MSW

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role?: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password123",
    role: "user",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    password: "password123",
    role: "user",
  },
];
