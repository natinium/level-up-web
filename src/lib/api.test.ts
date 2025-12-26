// lib/api.test.ts
import { describe, it, expect } from "vitest";
import { api } from "./api";

describe("API Client", () => {
  it("should fetch users correctly", async () => {
    const users = await api.getUsers();
    expect(users).toBeInstanceOf(Array);
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty("id");
    expect(users[0]).toHaveProperty("name");
  });

  it("should fetch a single user correctly", async () => {
    const user = await api.getUserById(1);
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("name", "John Doe");
  });
});
