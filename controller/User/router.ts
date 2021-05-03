import cgi from "./cgi";

export default function (router: any) {
  router.get("/User/cgi/:name", cgi);
  router.post("/User/cgi/:name", cgi);
}
