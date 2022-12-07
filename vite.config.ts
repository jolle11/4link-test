import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePluginFonts({
			google: {
				families: [
					{
						name: "Josefin Sans",
						styles: "wght@700",
						defer: true,
						// font-family: 'Josefin Sans', sans-serif;
					},
					{
						name: "Josefin Slab",
						styles: "ital,wght@0,500;0,700;1,500;1,700",
						defer: true,
						// font-family: 'Josefin Slab', serif;
					},
				],
			},
		}),
	],
});
