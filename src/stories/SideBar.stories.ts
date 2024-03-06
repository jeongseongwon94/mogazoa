import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from '@/components/common/menu/SideBar';

const meta = {
  title: 'Components/Common/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['medium', 'large'],
      },
    },
  },
} satisfies Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args:{
    size: 'large',
  },
};
