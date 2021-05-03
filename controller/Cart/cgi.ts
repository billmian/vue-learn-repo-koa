import CgiBase from "../CgiBase";
import model from "../..//model/models/index";

class CartCgi extends CgiBase {
  async addCart(ctx: any, app: any) {
    const { order_info: orderTable, user_info: userTable } = model;
    const { uid, finalPrice, pid, orderTime } = ctx.request.body;
    const userInfo = await userTable.findOne({
      where: {
        uid,
      },
    });
    const balance = userInfo?.user_balance;
    if (balance < finalPrice) {
      ctx.response.body = { code: 400, msg: "balance not enough" };
      ctx.response.status = 200;
      return;
    }

    await orderTable.create({
      uid,
      pid,
      price: finalPrice,
      order_time: orderTime,
      state: "已完成",
    });
    await userTable.update(
      {
        user_balance: balance - finalPrice,
      },
      {
        where: {
          uid,
        },
      }
    );
    ctx.response.body = {};
    ctx.response.status = 200;
  }
  async getCartList(ctx: any) {
    const { order_info: orderTable, product_info: productTable } = model;
    const { uid } = ctx.request.body;
    const result = await orderTable.findAll({
      where: {
        uid,
      },
    });
    for (let i = 0; i < result.length; i++) {
      const orderItem = result[i];
      const { pid } = orderItem;
      const product = await productTable.findOne({
        where: {
          pid,
        },
      });
      result[i] = { ...result[i].dataValues, ...product.dataValues };
    }

    ctx.status = 200;
    ctx.response.body = result;
  }
}
const cartCgi = new CartCgi();
export default cartCgi.dispatch.bind(cartCgi);
