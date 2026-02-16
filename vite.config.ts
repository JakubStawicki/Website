import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), tailwindcss(), imagetools()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		allowedHosts: ["shot-agriculture-relating-bruce.trycloudflare.com"],
	},
});
