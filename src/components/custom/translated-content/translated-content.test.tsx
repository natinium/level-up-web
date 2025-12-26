import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TranslatedContent } from "./translated-content";

// Mock next-intl hooks
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => `Translated: ${key}`,
}));

/**
 * @description Test suite for the TranslatedContent component.
 */
describe("TranslatedContent", () => {
  /**
   * @description Test case to ensure the component renders without crashing and displays translated elements.
   */
  it("renders without crashing", () => {
    render(<TranslatedContent />);
    const translatedElements = screen.getAllByText(/Translated:/);
    expect(translatedElements.length).toBeGreaterThan(0);
  });

  /**
   * @description Test case to ensure the component renders the translated title and description.
   */
  it("renders title and description", () => {
    render(<TranslatedContent />);
    expect(screen.getByText("Translated: title")).toBeInTheDocument();
    expect(screen.getByText("Translated: description")).toBeInTheDocument();
  });
});
