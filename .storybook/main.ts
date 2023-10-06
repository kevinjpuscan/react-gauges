import type { StorybookConfig } from "@storybook/react-vite";
import type { ViteFinal } from "@storybook/builder-vite";
const { mergeConfig } = require("vite");

const viteFinal: ViteFinal = async (config, options) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal,
};
export default config;
