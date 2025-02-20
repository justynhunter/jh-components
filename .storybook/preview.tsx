import type { Preview } from "@storybook/react";
import { Description, Stories } from "@storybook/blocks";
import React from "react";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            page: () => {
                return (
                    <>
                        <Description />
                        <Stories />
                    </>
                );
            }
        }
    },
};

export default preview;
