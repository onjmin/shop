import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "404.html",
		}),
		paths: {
			base: process.env.GITHUB_PAGES ? "/shop" : "",
		},
		prerender: {
			entries: ['*']
		}
	},
};

export default config;
