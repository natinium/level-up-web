// msw/server.ts
// Node.js-specific MSW setup

import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Initialize the Node.js server
export const server = setupServer(...handlers);

// Export for testing setup
export { handlers };
