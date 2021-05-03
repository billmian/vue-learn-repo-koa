const https = require("https");
const model = require("../model/models/index");

//模拟图片的url
let pictureList = [
  {
    url:
      "https://p1.meituan.net//deal/04ac771d51e82203a8f3de6bef060dd419893.jpg@150w_150h_1e_1c",
    name: ["国产香蕉", "高山甜香蕉", "海南软心香蕉"],
  },
  {
    url:
      "https://p1.meituan.net//deal/6ad2f9246f87e0f88563e245529bc6f077431.jpg@150w_150h_1e_1c",
    name: ["四川不知火", "粑粑柑", "云南优选丑橘"],
  },
  {
    url:
      "https://p0.meituan.net//deal/1e690556b43a360e4eda525e6effe1bd25221.jpg@150w_150h_1e_1c",
    name: ["广西黑美人西瓜", "海南麒麟瓜", "云南甜王西瓜"],
  },
  {
    url:
      "https://p0.meituan.net/208.126/deal/076ad08d3af127937357fa0e395e06ed248064.jpg@100w_100h_1e_1c",
    name: ["山东羊角蜜", "云南清香蜜瓜", "海南小蜜瓜"],
  },
  {
    url:
      "https://p0.meituan.net/208.126/deal/73fa53feb87387e28a55b87a081faa5f28797.jpg@100w_100h_1e_1c",
    name: ["李子", "汶川李子", "进口李子"],
  },
  {
    url:
      "https://p0.meituan.net/ugcpic/e36e2dec93d84bd6938a85a4ce205363@380w_214h_1e_1c",
    name: ["虫草鸡蛋", "五谷营养蛋", "富硒鸡蛋"],
  },
  {
    url:
      "https://p0.meituan.net/ugcpic/cfead930ee665b09a86df2f0c1f02181@380w_214h_1e_1c",
    name: ["鲜牛奶", "纯牛奶", "有机奶"],
  },
  {
    url:
      "https://p1.meituan.net/wmproductdwm/19fb372585765aad28eecd4185c4ec9197393.jpg@130w_130h_1e_1c",
    name: ["新鲜包菜", "尖莲白", "莲白"],
  },
  {
    url:
      "https://p0.meituan.net/wmproductdwm/6c1ebd12404041189146870a70abdb78253058.jpg@130w_130h_1e_1c",
    name: ["杏鲍菇", "金针菇", "海鲜菇"],
  },
  {
    url:
      "https://p0.meituan.net/wmproductdwm/e8a5a9b422d2196a7221cee7f2d70698131287.jpg@380w_214h_1e_1c",
    name: ["奶白菜", "大白菜", "小白菜"],
  },
  {
    url:
      "https://p0.meituan.net/xianfu/326cc3ecd550d25ecf841cc928b0a0cb288768.jpg@380w_214h_1e_1c",
    name: ["鲜猪肉", "农家土猪肉", "黑猪肉"],
  },
];

function getBase64(pictureList) {
  const { product_info: productTable } = model;
  pictureList.forEach((pictureItem) => {
    const { url, name: nameArr } = pictureItem;
    nameArr.forEach((name) => {
      https.get(url, function (res) {
        var chunks: any = [];
        var size = 0;
        res.on("data", function (chunk) {
          chunks.push(chunk);
          size += chunk.length;
        });
        res.on("end", function (err) {
          var data = Buffer.concat(chunks, size);
          const base64Img = `data:image/jpg;base64,${data.toString("base64")}`;
          productTable.create({
            product_name: name,
            picture: base64Img,
          });
        });
      });
    });
  });
}

getBase64(pictureList);
export {};
