import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import packageJson from "./package.json";

const SINGLETON = new Set(["react", "react-dom", "react-router-dom"]);

export default defineConfig({
	server: {
		port: 3005,
	},
	dev: {
		assetPrefix: "http://localhost:3005",
	},
	tools: {
		rspack: (config, { appendPlugins }) => {
			appendPlugins([
				new ModuleFederationPlugin({
					name: "federation_users",
					exposes: {
						"./UsersApp": "./src/App.tsx",
					},
					remotes: {
						federation_ui:
							"federation_ui@http://localhost:3004/mf-manifest.json",
					},
					shared: [
						{
							...Object.entries(packageJson.dependencies).reduce(
								(shared, [key, version]) => {
									shared[key] = { requiredVersion: version };
									if (SINGLETON.has(key)) {
										shared[key].singleton = true;
										shared[key].eager = true;
									}
									return shared;
								},
								{},
							),
						},
					],
				}),
			]);
		},
	},
	plugins: [pluginReact()],
});
