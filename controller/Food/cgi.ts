import CgiBase from "../CgiBase";
import model from "../..//model/models/index";

class FoodCgi extends CgiBase {
  async getFoodList(ctx: any, app: any) {
    const { page = 1 } = ctx.request.body;

    const { product_info: productTable } = model;
    const result = await productTable.findAll({
      limit: 10,
      offset: page * 10 - 10,
    });
    ctx.response.body = result;
    ctx.status = 200;
  }
  //根据pid 获取单个食品信息
  async getFoodInfo(ctx: any) {
    const { pid } = ctx.request.body;
    const { product_info: productTable } = model;
    if (pid) {
      const result = await productTable.findOne({
        where: {
          pid,
        },
      });
      if (result) {
        ctx.response.body = {
          code: 200,
          data: result,
        };
      } else {
        ctx.response.body = {
          code: 400,
          msg: "cant find food",
        };
      }
      ctx.status = 200;
    } else {
      ctx.status = 200;
      ctx.response.body = {
        code: 400,
        msg: "pid cant be empty",
      };
    }
  }
}
const foodCgi = new FoodCgi();
export default foodCgi.dispatch.bind(foodCgi);
