import fs from "fs";

export function setupSwiperJs() {
  if (fs.existsSync('node_modules/swiper/swiper-bundle.min.js')) {
    const modules = [
      'node_modules/swiper/swiper-bundle.min.js',
      'node_modules/swiper/swiper-bundle.min.js.map',
    ];
    return gulp.src(modules)
      .pipe(gulp.dest(paths.build.scripts));
  } else {
    return gulp.src(paths.scr.scripts);
  }
};
export function setupSwiperCss() {
  if (fs.existsSync('node_modules/swiper/swiper.min.css')) {
    const swiperCss = [
      'node_modules/swiper/swiper.min.css',
    ];
    return gulp.src(swiperCss)
      .pipe(gulp.dest(paths.build.css));
  } else {
    return gulp.src(paths.scr.css);
  }
};