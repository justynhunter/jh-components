import type { Meta, StoryObj } from "@storybook/react-vite";

import { MirroredImage } from ".";

const meta: Meta<typeof MirroredImage> = {
    component: MirroredImage,
    tags: ["autodocs"],
    parameters: {}
};

export default meta;
type Story = StoryObj<typeof MirroredImage>;

export const Default: Story = {
    args: {
        imageUrl: "https://placehold.co/600x400",
        width: "600px",
        height: "400px",
    }
};
