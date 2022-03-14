import { join, dirname } from "path";
import { fileURLToPath } from "url";
const curentDir = dirname(fileURLToPath(import.meta.url));
const root = join(curentDir, "../../");
const mp3Dir = join(root, "audio");
const publicDir = join(root, "public");

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    publicDir,
    mp3Dir,
    songDir: join(mp3Dir, "song"),
    fxDir: join(mp3Dir, "fx"),
  },
  pages: {
    homeHTML: "home/index.html",
    controllerHTML: "controller/index.html",
  },
  location: {
    home: "/home",
  },
  constants: {
    CONTENT_TYPE: {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
    },
  }
};
