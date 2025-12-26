/// <reference types="vitest/globals" />
import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import styles from "./button.module.scss";

/**
 * @description Test suite for the custom Button component.
 * This component extends the Shadcn UI Button with custom styling.
 */
describe("Custom Button", () => {
  /**
   * @description Test case to ensure the custom button renders with its specific class.
   */
  it("should render with the custom class", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(styles["custom-button"]);
  });
});
