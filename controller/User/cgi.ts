import CgiBase from "../CgiBase";

class UserCgi extends CgiBase {
  async getName(ctx: any, app: any) {
    console.log("🚀 ~ file: cgi.ts ~ line 5 ~ UserCgi ~ getName ~ ctx", ctx)
    ctx.response.body = "123";
  }
}
const userCgi = new UserCgi();
export default userCgi.dispatch.bind(userCgi);
