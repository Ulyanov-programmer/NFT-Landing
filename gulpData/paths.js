import * as nodePath from 'path';

export const projectFolderName = nodePath.basename(nodePath.resolve())
export const sourceFolderName = '#src';

export const paths = {
  build: {
    html: `${projectFolderName}/`,
    css: `${projectFolderName}/css/`,
    scripts: `${projectFolderName}/scripts/`,
    scriptModules: `${projectFolderName}/scripts/modules/`,
    images: `${projectFolderName}/img/`,
    fonts: `${projectFolderName}/fonts/`,
  },
  scr: {
    html: [`${sourceFolderName}/*.html`, `!${sourceFolderName}/*.htm`],
    css: [`${sourceFolderName}/stylus/*.styl`, `!${sourceFolderName}/stylus/_*.styl`],
    scripts: `${sourceFolderName}/scripts/*.{ts,js}`,
    scriptModules: `${sourceFolderName}/scripts/modules/*.{ts,js}`,
    images: `${sourceFolderName}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    fonts: `${sourceFolderName}/fonts/*`,
  },
  watch: {
    html: [`${sourceFolderName}/**/*.html`, `${sourceFolderName}/**/*.htm`],
    css: `${sourceFolderName}/stylus/**/*.styl`,
    scripts: `${sourceFolderName}/scripts/**/*.{ts,js}`,
    scriptModules: `${sourceFolderName}/scripts/**/*.{ts,js}`,
    images: `${sourceFolderName}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
  },
  clean: `./${projectFolderName}/`,
}
export let fontsFIlePath = `${sourceFolderName}/stylus/_fonts.styl`;