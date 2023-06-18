// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text, Divider } from "../index";

const meta: Meta<typeof Box> = {
  component: Box,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const DefaultDivider: Story = {
  args: {
    className: "space-x-2",
    children: (
      <>
        <Divider />
        <Text>or</Text>
      </>
    ),
  },
};
