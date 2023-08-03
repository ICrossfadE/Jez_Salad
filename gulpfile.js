//main module
import gulp from "gulp";
//import paths
import { path } from "./gulp/configs/path.js";
//import basic plugins
import { plugins } from "./gulp/configs/plugins.js";

//We pass the value to the global variable
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// import Tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";

//watcher
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//Run scenario
gulp.task("default", dev);
