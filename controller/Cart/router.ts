import cgi from "./Cgi";

export default function (router: any) {
  router.get("/Cart/cgi/:name", cgi);
  router.post("/Cart/cgi/:name", cgi);
}
