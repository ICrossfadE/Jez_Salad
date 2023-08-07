// Головний модуль / Main module
import gulp from "gulp";
// Імпорт шляхів / Import paths
import { path } from "./gulp/configs/path.js";
// Імпорт основних плагінів / Import basic plugins
import { plugins } from "./gulp/configs/plugins.js";

//We pass the value to the global variable
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Імпорт зачач / Import Tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";

// Наглядач / Watcher
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// Основні задачі / Main tasks
const mainTasks = gulp.parallel(copy, html, scss, js, images);

//Серія задач / Series tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };

// Запуск сценарію // Run scenario
gulp.task("default", dev);
