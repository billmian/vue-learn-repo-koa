import cgi from "./cgi";

export default function (router: any) {
  router.get("/User/cgi/:name", cgi);
}
