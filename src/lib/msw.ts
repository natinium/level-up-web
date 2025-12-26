// lib/msw.ts
// MSW setup for development environment

import { worker } from "../../msw/browser";

// In development, start the browser mocking
export const initMsw = async () => {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    try {
      await worker.start({
        onUnhandledRequest: "bypass", // Don't log unhandled requests
      });
      console.log("MSW: Mocking enabled");
    } catch (error) {
      console.error("MSW: Failed to start worker", error);
    }
  }
};
