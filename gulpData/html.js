import fileInclude from 'gulp-file-include';
import webpAvifHTML from 'gulp-avif-webp-html';

export function html() {
  return gulp.src(paths.scr.html)
    .pipe(fileInclude())
    .pipe(
      global.if(global.isProd,
        (webpAvifHTML())
      )
    )
    .pipe(gulp.dest(paths.build.html))
    .pipe(browsersync.stream());
}