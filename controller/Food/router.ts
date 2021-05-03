import cgi from "./cgi";

export default function (router: any) {
  router.get("/Food/cgi/:name", cgi);
  router.post("/Food/cgi/:name", cgi);
}
