// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Box, Button, HStack, Modal, Text } from "../index";

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const DefaultBox: Story = {
  args: {
    children: (
      <>
        <Button>Open Modal</Button>
        <Modal isOpen={true}>
          <HStack className="font-bold">Modal Title</HStack>
          <Text className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, quae!
          </Text>
          <HStack className="mt-5 justify-end space-x-3">
            <Button>Cancel</Button>
            <Button>Save</Button>
          </HStack>
        </Modal>
      </>
    ),
  },
};
