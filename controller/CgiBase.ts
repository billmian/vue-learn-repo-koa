export default class CgiBase {
  async dispatch(ctx: any) {
    const param = ctx.params;
    const { name } = param;
    if (this[name]) {
      await this[name](ctx);
    } else {
      ctx.response.body = { code: 400, data: "route node found" };
      ctx.response.status = 200;
    }
  }
}
