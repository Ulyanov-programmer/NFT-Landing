import stylus from 'gulp-stylus';
import cleanCss from 'gulp-clean-css';
import groupMedia from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';

export function css() {
  return gulp.src(paths.scr.css)
    .pipe(stylus({}))
    .pipe(
      global.if(global.isProd,
        groupMedia()
      )
    )
    .pipe(
      global.if(global.isProd,
        autoprefixer({
          overrideBrowserslist: ['last 5 versions'],
          cascade: true,
        })
      )
    )
    //if you want to see not-minify css files
    .pipe(gulp.dest(paths.build.css))

    //save cleaning and renaming new css files
    .pipe(
      global.if(global.isProd,
        cleanCss()
      )
    )
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(paths.build.css))
    .pipe(browsersync.stream());
}