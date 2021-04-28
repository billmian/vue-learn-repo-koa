export default function promiseify(fn: Function) {
  return (arg: any) => {
    return new Promise((resolve, reject) => {
      fn(arg, (err: any, callBackArg: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(callBackArg);
        }
      });
    });
  };
}
