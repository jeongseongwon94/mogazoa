import type { Meta, StoryObj } from "@storybook/react";

import AuthContainer from "@/components/common/auth/AuthContainer";

const meta = {
	title: "components/Auth/AuthContainer",
	component: AuthContainer,
	tags: ["autodocs"],
} satisfies Meta<typeof AuthContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "",
	},
};