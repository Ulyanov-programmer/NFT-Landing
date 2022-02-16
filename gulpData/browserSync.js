export default function browserSyncFunc(params) {
  browsersync.init({
    server: {
      baseDir: paths.build.html,
    },
    port: 3000,
    notify: false,
  });
}