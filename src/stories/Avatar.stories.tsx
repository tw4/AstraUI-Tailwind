// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../index";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const DefaultAvatar: Story = {
  args: {
    className: "w-12 h-12",
    href: "https://avatars.githubusercontent.com/u/88425310?v=4",
  },
};
