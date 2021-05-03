import Koa from "koa";
import route from "./router";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(cors());
app.use(bodyParser());
route(app);

app.listen(3000);
