import gulp from "gulp";
import { path } from "./gulp/configs/path.js";

//We pass the value to the global variable
global.app = {
  path: path,
  gulp: gulp,
};

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
}

const dev = gulp.series(reset, copy, watcher);

//Run scenario
gulp.task("default", dev);
