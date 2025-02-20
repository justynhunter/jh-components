import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-designs",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    typescript: { reactDocgen: 'react-docgen-typescript' },
    docs: {
        autodocs: true
    }
};
export default config;
