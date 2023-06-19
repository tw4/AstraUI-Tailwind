// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../index";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const DefaultCheckbox: Story = {
  args: {
    children: "Checkbox",
  },
};
