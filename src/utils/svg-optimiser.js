import { readFile, statSync, writeFileSync } from 'fs';
import { optimize } from 'svgo';
// import svgoConfig from '../config/svgo-config.js';
import { execSync } from 'child_process';

export const svgOptimizer = ({ stagedSvgFiles = [], inlineSVGSourceDirectory = '', rootDirectory = '' }) => {

  console.log(`stagedSvgFiles >>>>>> ${stagedSvgFiles} \n inlineSVGSourceDirectory >>>>>> ${inlineSVGSourceDirectory} \n rootDirectory >>>>>> ${rootDirectory} `);
  
  const STAGED_SVG_FILES_TO_VALIDATE = rootDirectory ? stagedSvgFiles.filter((path) => path.includes(rootDirectory)) : stagedSvgFiles; // Checks only the svgs inside front-end react folder
  console.log('STAGED_SVG_FILES_TO_VALIDATE>>>>>', STAGED_SVG_FILES_TO_VALIDATE);
  
  if (!STAGED_SVG_FILES_TO_VALIDATE.length) {
    process.exit(0);
  }

  let bytesToKB = (bytes) => (bytes / 1024).toFixed(3);

  let diffInPerc = (a, b) => (100 - (a / b) * 100).toFixed(2);

  console.log(
    `\x1b[33mWarning: Your SVG file(s) may have been optimised before committing! Visually validate in UI if everything still looks great before pushing.\nTo revert the last commit, run 'git reset HEAD~1'\x1b[0m\n`,
  );
  STAGED_SVG_FILES_TO_VALIDATE.forEach((filepath) => {
    console.log('filepath  >>>', filepath);
    readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        console.log('error', err);
        throw err;
      }

      let sizeThen = bytesToKB(statSync(filepath).size);
      let isInlineSVG = inlineSVGSourceDirectory.some((el) => filepath.includes(el));

      if (sizeThen > 2 && isInlineSVG) {
        // SVGs greater than 2 kb shouldn't be inline
        console.error(
          `\x1b[31mError: ${filepath} is too big for inline SVG. They should be 2 KiB or less.\nConsider uploading this to /assets/image/ dir. and using as an SVG image.\x1b[0m`,
        );
        process.exit(1);
      }

      const result = optimize(data, {
        path: filepath,
        plugins: [{
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        }]
      });
      console.log('result >>>>', result);

      let relativePath = filepath.slice(filepath.lastIndexOf('/') + 1);
      writeFileSync(filepath, result.data);

      let sizeNow = bytesToKB(statSync(filepath).size);
      console.log(
        `Optimised ${relativePath} successfully! 🎉\n`,
        `${sizeThen} KiB - \x1b[32m${diffInPerc(sizeNow, sizeThen)}%\x1b[0m = ${sizeNow} KiB\n`,
      );

      execSync('git add ' + filepath); //staging the optimised files
    });
  });

}