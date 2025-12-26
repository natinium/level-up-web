import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AnimatedRocket } from "./animated-rocket";

/**
 * @description Test suite for the AnimatedRocket component.
 */
describe("AnimatedRocket", () => {
  /**
   * @description Test case to ensure the component renders without crashing.
   */
  it("renders without crashing", () => {
    render(<AnimatedRocket />);
    const image = screen.getByAltText("Rocket") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("rocket.png");
  });

  /**
   * @description Test case to ensure the image has the correct dimensions.
   */
  it("has the correct dimensions", () => {
    render(<AnimatedRocket />);
    const image = screen.getByAltText("Rocket");
    expect(image).toHaveAttribute("width", "200");
    expect(image).toHaveAttribute("height", "200");
  });
});
