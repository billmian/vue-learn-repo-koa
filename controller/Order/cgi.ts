import CgiBase from "../CgiBase";

class OrderCgi extends CgiBase {
  async getName(ctx: any, app: any) {
    ctx.response.body = "OrderCgi";
  }
}
const orderCgi = new OrderCgi()
export default orderCgi.dispatch.bind(orderCgi);
