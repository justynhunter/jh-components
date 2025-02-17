import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
    css: {
        modules: {
            localsConvention: "camelCase",
            generateScopedName: "[local]_[hash:base64:2]"
        }
    },
    plugins: [react(), dts({
        exclude: [
            "**.stories.ts",
            "**.stories.tsx",
        ]
    })],
    build: {
        copyPublicDir: false,
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            name: "jhComponents",
            fileName: "jh-components"
        },
        outDir: "./dist"
    },
})
