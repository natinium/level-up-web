import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AnimatedRocket } from "./animated-rocket";

const meta = {
  title: "Components/AnimatedRocket",
  component: AnimatedRocket,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof AnimatedRocket>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
