import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	previewHead: (head) => `  
  ${head}
  <style>
      html {
        font-size: 62.5%;
      }
    </style>
  `,
	webpackFinal: async (config: any) => {
		config.resolve.alias["@"] = path.resolve(__dirname, "../src");
		config.resolve.alias["@/pages"] = path.resolve(__dirname, "../src/pages");
		config.resolve.alias["@/components"] = path.resolve(
			__dirname,
			"../src/components",
		);

		return config;
	},
};
export default config;
