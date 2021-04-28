import fs from "fs";
import path from "path";
import Router from "koa-router";

export default async function (app: any) {
  const router = new Router();

  const result = fs.readdirSync(path.resolve(__dirname, "../controller"));

  result.forEach((dirName) => {
    const dirPath = path.resolve(__dirname, "../controller", dirName);
    const stat = fs.lstatSync(dirPath);
    if (stat.isDirectory()) {
      const controllerRoute = require(path.resolve(dirPath, "router.ts"))
        .default;
      controllerRoute(router);
    }
  });

  router.get("/name/:id", function (ctx: any) {
    ctx.body = "123";
  });

  app.use(router.routes());
}
