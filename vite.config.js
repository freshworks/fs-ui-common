import { defineConfig } from "vite";

export default () => {
  return defineConfig({
    build: {
      cssCodeSplit: true,
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
