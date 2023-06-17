// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button, HStack } from "../index";

const meta: Meta<typeof HStack> = {
  component: HStack,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HStack>;

export const DefaultHStack: Story = {
  args: {
    className: "space-x-2",
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};
