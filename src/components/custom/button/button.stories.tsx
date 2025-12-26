import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

/**
 * @description Storybook meta data for the custom Button component.
 */
const meta: Meta<typeof Button> = {
  title: "Custom/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * @description Default story for the custom Button component.
 */
export const Default: Story = {
  args: {
    children: "Custom Button",
  },
};
