// msw/handlers/index.ts
// Export all MSW request handlers

import { userHandlers } from "./user";
import { authHandlers } from "./auth";

export const handlers = [...userHandlers, ...authHandlers];
