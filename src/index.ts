import Koa from "koa";
import route from "./router";
const app = new Koa();

route(app);

app.listen(3000);
