// lib/api.ts
// Example API client that would work with MSW mocks

export interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

// Example API functions that would make real HTTP requests in production
// but are mocked by MSW during development/testing
export const api = {
  // User-related API calls
  getUsers: async (): Promise<User[]> => {
    const response = await fetch("/api/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user with id ${id}`);
    }
    return response.json();
  },

  createUser: async (userData: Omit<User, "id">): Promise<User> => {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    return response.json();
  },

  updateUser: async (id: number, userData: Partial<User>): Promise<User> => {
    const response = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error(`Failed to update user with id ${id}`);
    }
    return response.json();
  },

  deleteUser: async (id: number): Promise<void> => {
    const response = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete user with id ${id}`);
    }
  },

  // Authentication-related API calls
  login: async (
    email: string,
    password: string,
  ): Promise<{ user: User; token: string }> => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }
    return response.json();
  },

  logout: async (): Promise<void> => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
  },

  getProfile: async (token: string): Promise<User> => {
    const response = await fetch("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get profile");
    }
    return response.json();
  },
};
