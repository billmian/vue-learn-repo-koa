import fs from "fs";
import promiseify from "./promiseify";

export default function (path: string) {
  return promiseify(fs.lstatSync);
}
