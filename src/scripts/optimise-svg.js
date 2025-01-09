import { svgOptimizer } from '../utils/svg-optimiser';

const stagedSvgFiles = process.argv.slice(2);
const inlineSVGSourceDirectory = ['public/svgs/inline-svgs'];
const rootDirectory = '';
const imageDirectory = '/public/svgs/images/';

svgOptimizer({ stagedSvgFiles, inlineSVGSourceDirectory, rootDirectory, imageDirectory });