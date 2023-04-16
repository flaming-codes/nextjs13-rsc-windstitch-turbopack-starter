import type { Meta, StoryObj } from "@storybook/react";

import { Debug } from "./Debug";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Debug> = {
  title: "Example/Debug",
  component: Debug,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Debug>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
