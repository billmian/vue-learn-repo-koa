import cgi from "./cgi";

export default function (router: any) {
  router.get("/Order/cgi/:name", cgi);
  router.post("/Order/cgi/:name", cgi);
}
