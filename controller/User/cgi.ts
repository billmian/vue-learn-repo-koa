import CgiBase from "../CgiBase";
import model from "../..//model/models/index";

class UserCgi extends CgiBase {
  async login(ctx: any, app: any) {
    const { user_info: UserTable, receiving_info: ReceivingTable } = model;
    const {
      params: { account, password },
    } = ctx.request.body;

    if (!account || !password) {
      ctx.response.body = {
        code: 400,
        msg: "account or password error",
      };
      ctx.response.status = 200;
      return;
    }

    const result = await UserTable.findOne({
      where: {
        user_account: account,
      },
    });
    if (result && result.dataValues.user_password === password) {
      const { dataValues } = result;
      const { uid, user_name, user_type, user_balance } = dataValues;
      const receivingInfoArr = await ReceivingTable.findAll({
        where: {
          uid,
        },
      });
      ctx.response.body = {
        code: 200,
        msg: {
          uid,
          user_name,
          user_type,
          user_balance,
          receiving: receivingInfoArr,
        },
      };
      ctx.status = 200;
    } else {
      ctx.response.body = {
        code: 400,
        msg: "username or password error",
      };
      ctx.status = 200;
    }
  }
  async getUserInfo(ctx: any) {
    const { user_info: UserTable, receiving_info: ReceivingTable } = model;
    const { uid } = ctx.request.body;
    const result = await UserTable.findOne({
      where: {
        uid,
      },
    });
    ctx.response.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }
}
const userCgi = new UserCgi();
export default userCgi.dispatch.bind(userCgi);
