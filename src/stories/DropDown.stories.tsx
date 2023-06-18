// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button, DropDown, MenuItem } from "../index";
import { IoIosArrowDown } from "react-icons/io";

const meta: Meta<typeof DropDown> = {
  component: DropDown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const DefaultDropDown: Story = {
  args: {
    className: "space-x-2",
    button: (
      <Button>
        Click Me <IoIosArrowDown />
      </Button>
    ),
    children: (
      <>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </>
    ),
  },
};
