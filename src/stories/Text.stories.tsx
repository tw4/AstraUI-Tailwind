// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../index";

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const DefaultButton: Story = {
  args: {
    children: "ipsum dolor sit amet consectetur adipisicing elit.",
  },
};
