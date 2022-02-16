import ts from 'gulp-typescript';
import terser from 'gulp-terser';

export function scripts() {
  //? saving scripts files
  gulp.src(paths.scr.scripts)
    .pipe(ts({
      target: 'ES6',
      allowJs: true,
    }))

    .pipe(gulp.dest(paths.build.scripts))

  //? saving modules
  return gulp.src(paths.scr.scriptModules)
    .pipe(ts({
      target: 'es2018',
      allowJs: true,
    }))
    // use this if you're also annoyed that the gulp is shutdown due to a compiler error.
    .on('error', () => { })

    // minimizing.
    .pipe(
      global.if(global.isProd,
        terser({
          ecma: 2018,
          safari10: true,
        })
      )
    )
    .pipe(gulp.dest(paths.build.scriptModules))
    .pipe(browsersync.stream());
}