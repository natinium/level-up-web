import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TranslatedContent } from "./translated-content";

/**
 * @description Storybook meta data for the TranslatedContent component.
 */
const meta = {
  title: "Components/TranslatedContent",
  component: TranslatedContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TranslatedContent>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * @description Default story for the TranslatedContent component.
 */
export const Default: Story = {
  args: {},
};
