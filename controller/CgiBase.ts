export default class CgiBase {
  dispatch(ctx: any) {
    const param = ctx.params;
    console.log(
      "🚀 ~ file: CgiBase.ts ~ line 4 ~ CgiBase ~ dispath ~ param",
      param,
      this
    );
    const { name } = param;
    if (this[name]) {
      this[name](ctx);
    } else {
      ctx.response.body = "route node found";
      ctx.response.code = 200;
    }
  }
}
