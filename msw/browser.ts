// msw/browser.ts
// Browser-specific MSW setup

import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// Initialize the browser worker
export const worker = setupWorker(...handlers);

// Export for initialization in the application
export { handlers };
