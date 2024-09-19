import { defineConfig } from "vite";
import { resolve } from "path";

const files = ["colors/main.scss", "components/button/button.scss"];

const entries = files.map((file) => resolve(__dirname, `./src/styles/${file}`));

export default () => {
  return defineConfig({
    build: {
      cssCodeSplit: true,
      lib: {
        entry: entries,
        name: "FS UI Library",
      },
      rollupOptions: {
        input: {
          "fs-colors": "./src/styles/colors/main.scss",
          "fs-button": "./src/styles/components/button/button.scss",
        },
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/styles/[name].[ext]`,
        },
      },
    },
  });
};
