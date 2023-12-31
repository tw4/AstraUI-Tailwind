// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../index";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    onChange: (e) => console.log(e.currentTarget.value),
    placeholder: "Input",
  },
};
