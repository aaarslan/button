import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { peerDependencies } from "./package.json";
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["lib/"], rollupTypes: true }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.tsx"),
      formats: ["es", "cjs", "umd"],
      name: "button",
      fileName: "button",
    },
    reportCompressedSize: true,
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "prop-types",
        ...Object.keys(peerDependencies),
      ],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "jsxRuntime",
          "react-dom": "ReactDOM",
          "prop-types": "PropTypes",
        },
      },
      input: "lib/main.tsx",
    },
  },
});
