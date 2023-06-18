// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button, Box } from "../index";

const meta: Meta<typeof Box> = {
  component: Box,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const DefaultBox: Story = {
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
