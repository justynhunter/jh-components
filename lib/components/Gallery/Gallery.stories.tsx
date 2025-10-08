import type { Meta, StoryObj } from "@storybook/react-vite";

import { Gallery } from ".";

const meta: Meta<typeof Gallery> = {
    component: Gallery,
    tags: ["autodocs"],
    parameters: {}
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
    args: {
        images: [
            {
                src: "https://placehold.co/600x400",
                alt: "placeholder image",
            },
            {
                src: "https://placehold.co/600x400",
                alt: "placeholder image",
            },
            {
                src: "https://placehold.co/600x400",
                alt: "placeholder image",
            },
            {
                src: "https://placehold.co/600x400",
                alt: "placeholder image",
            },
            {
                src: "https://placehold.co/600x400",
                alt: "placeholder image",
            },
        ]
    }
};
