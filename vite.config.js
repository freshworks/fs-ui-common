import { defineConfig } from "vite";
import fastGlob from 'fast-glob';
import path from 'path';

const files = ["colors/main.scss", "components/button/button.scss"];

const entries = files.map((file) => path.resolve(__dirname, `./src/styles/${file}`));

export default () => {
  return defineConfig({
    build: {
      cssCodeSplit: true,
      lib: {
        entry: entries,
        name: "FS UI Library",
        formats: ['es', 'cjs']
      },
      rollupOptions: {
        input: {
          "fs-colors": "./src/styles/colors/main.scss",
          "fs-colors-wc": "./src/styles/colors/main-wc.scss",
          "fs-base-styles": "./src/styles/app-components/main.scss",
          "fs-reset": "./src/styles/base/reset.scss",
          ...generateInputsFromFolder('./src/utils'),
        },
        output: {
          entryFileNames: (chunkInfo) => {
            const { facadeModuleId } = chunkInfo;
            // By default entry files are placed under assets folder, to group them under other folders based on module type, add those folders here
            const moduleTypes = ['utils'];
            for (let i = 0; i < moduleTypes.length; i++) {
              if (facadeModuleId?.includes(moduleTypes[i])) {
                const moduleType = moduleTypes[i];
                const [, lastPart] = facadeModuleId.split(moduleTypes[i]);
                const lastFolders = lastPart.slice(
                  0,
                  lastPart.lastIndexOf('/'),
                );
                return `${moduleType}${lastFolders}/[name].js`;
              }
            }
            return `assets/[name].js`;
          },
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/styles/[name].[ext]`,
        },
        external: ['fs', 'child_process']
      },
    },
  });

  function generateInputsFromFolder(folderPath) {
    const files = fastGlob.sync(`${folderPath}/**/*.*`); // Matches all files in the folder
    const inputs = {};

    files.forEach((file) => {
      const fileName = path.basename(file, path.extname(file)); // e.g., 'svg-optimiser'
      inputs[fileName] = file;
    });

    return inputs;
  }
};
