import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import packageJson from "./package.json";

const SINGLETON = new Set(["react", "react-dom", "react-router-dom"]);

export default defineConfig({
	server: {
		port: 3000,
	},
	tools: {
		rspack: (config, { appendPlugins }) => {
			appendPlugins([
				new ModuleFederationPlugin({
					name: "federation_consumer",
					remotes: {
						federation_products:
							"federation_products@http://localhost:3003/mf-manifest.json",
						federation_basket:
							"federation_basket@http://localhost:3002/mf-manifest.json",
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
