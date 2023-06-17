// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button, VStack } from "../index";

const meta: Meta<typeof VStack> = {
  component: VStack,
};

export default meta;
type Story = StoryObj<typeof VStack>;

export const DefaultVStack: Story = {
  args: {
    className: "space-y-2",
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};
