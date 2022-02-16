import fs from "fs";
import ttf2woff2 from  'gulp-ttf2woff2';
import { fontsFIlePath } from "./paths.js";

export function fonts() {
  return gulp.src(paths.scr.fonts)
    .pipe(ttf2woff2({
      ignoreExt: true,
    }))
    .pipe(gulp.dest(paths.build.fonts));
}

export function fontsStyle() {
  let file_content = fs.readFileSync(fontsFIlePath)
    .toString().replace(/\s/g, "");

  if (file_content == "") {
    fs.writeFile(fontsFIlePath, '', () => { });
    return fs.readdir(paths.build.fonts, (err, items) => {

      if (items) {
        for (var i = 0; i < items.length; i++) {
          let c_fontname;
          let fontFileName = items[i].split('.')[0];

          if (c_fontname !== fontFileName) {
            let fontFileNameLC = fontFileName.toLowerCase();
            let fontWeightName = fontFileNameLC.replace('italic', '').split('-')[1];

            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            let fontWeight = fontWeightName ? fontWeightName : fontFileName;
            let fontStyle = fontFileNameLC.includes('italic') ? 'italic' : 'normal';

            fontWeight = getFontWeightFromString(fontWeight);
            fontName = concatFontWeightWithName(fontName, fontWeightName);

            fs.appendFile(fontsFIlePath,
              `fontStyle('${fontName}',${fontFileName}, '${fontWeight}', ${fontStyle});\r\n`,
              () => { });
          }
          c_fontname = fontFileName;
        }
      }
    })
  }
}
function concatFontWeightWithName(fontName, fontWeightName) {
  switch (fontWeightName) {
    case 'thin':
      return `${fontName}-thin`;
    case 'extralight':
      return `${fontName}-el`;
    case 'light':
      return `${fontName}-l`;
    case 'medium':
      return `${fontName}-med`;
    case 'semibold':
      return `${fontName}-sb`;
    case 'bold':
      return `${fontName}-b`;
    case 'extrabold':
    case 'ultrabold':
      return `${fontName}-eb`;
    case 'black':
    case 'heavy':
      return `${fontName}-bl`;

    default:
      return fontName;
  }
}
function getFontWeightFromString(filename) {
  switch (filename) {
    case 'thin':
      return '100';
    case 'extralight':
      return '200';
    case 'light':
      return '300';
    case 'medium':
      return '500';
    case 'semibold':
      return '600';
    case 'bold':
      return '700';
    case 'extrabold':
    case 'ultrabold':
      return '800';
    case 'black':
    case 'heavy':
      return '900';

    default:
      return '400';
  }
}