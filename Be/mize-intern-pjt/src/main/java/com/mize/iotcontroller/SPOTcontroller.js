const express = require("express");
const axios = require("axios");
const CryptoJS = require("crypto-js");
const cors = require("cors");
const app = express();
const https = require("https");
const fs = require("fs");
const path = require("path");
const { json } = require("body-parser");

app.use(cors());
app.use(express.json());

app.post("/spotcontrol", async (req, res) => {
  const { agt, me, ai, category, brand, keys } = req.body;
  console.log("req:", req.body);
  //const keysvalue = JSON.stringify([keys]);
  //console.log("keysvalue:", keysvalue);

  // 검증
  if (!agt || !me || !ai || !category || !brand || keys === undefined) {
    console.error("Invalid request body:", req.body);
    return res.status(400).send("Invalid request body");
  }

  function getTime() {
    return Math.floor(Date.now() / 1000).toString(); // UNIX 타임스탬프 (초 단위)
  }

  function getSign(method, params, time, appkey, apptoken, userid, usertoken) {
    const paramKeyArr = [];
    if (params) {
      for (const keys in params) {
        paramKeyArr.push(keys);
      }
      paramKeyArr.sort();
    }
    let signStr = `method:${method}`;
    if (paramKeyArr.length > 0) {
      for (let i = 0; i < paramKeyArr.length; i++) {
        const k = paramKeyArr[i];
        console.log("params:", k, i, params[k]);
        const v = params[k];
        console.log("v: ", v);
        if (typeof v !== "object") {
          const vStr = v.toString();
          if (vStr.charAt(0) !== "@") {
            signStr += `,${k}:${vStr}`;
          }
        }
      }
    }
    // if (did) {
    //   signStr += `,did:${did}`;
    // }
    signStr += `,time:${time}`;
    signStr += `,userid:${userid || "10001"}`;
    signStr += `,usertoken:${usertoken || "10001"}`;
    signStr += `,appkey:${appkey},apptoken:${apptoken}`;
    return CryptoJS.MD5(signStr).toString();
  }

  try {
    const timestamp = getTime();
    //const keysvalue = `[\\ \"${keys}\\ \"]`;
    // const keysvalue = [keys];
    //const sanitizedKey = keys.replace(/^"(.*)"$/, "$1"); // 양쪽 따옴표 제거
    // console.log("Sanitized key:", sanitizedKey);

    // JSON 배열로 변환
    //console.log("Converted keysvalue:", keysvalue);

    const response = await axios.post(
      "https://api.us.ilifesmart.com/app/irapi.SendKeys",
      {
        id: "101",
        method: "SendKeys",
        system: {
          ver: "1.0",
          lang: "en",
          sign: getSign(
            "SendKeys",
            {
              agt: agt,
              me: me,
              ai: ai,
              category: category,
              brand: brand,
              keys: keys,
            },
            timestamp,
            "CWNu6tF1jpZ1eD9s36IA6A",
            "wOxwHxsdwHODCoDVFxPZog",
            "8390501",
            "dB3Goflx4IpifWSXhKsmEA"
          ),
          userid: "8390501",
          appkey: "CWNu6tF1jpZ1eD9s36IA6A",
          time: timestamp, // UNIX 타임스탬프 사용
        },
        params: {
          agt: agt,
          me: me,
          ai: ai,
          category: category,
          brand: brand,
          keys: keys,
        },
      }
    );

    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error controlling device:", error);
    res.status(500).send("Error controlling device");
  }
});

// const PORT = process.env.PORT || 3008;
// app.listen(PORT, "0,0,0,0", () => {
//   console.log(`API endpoint available at http://0.0.0.0:${PORT}/control`);
// });

// mkcert로 생성한 인증서 경로
const httpsOptions = {
  key: fs.readFileSync(
    path.join(__dirname, "../../../../../../localhost+3-key.pem") // 정확한 경로로 수정
  ),
  cert: fs.readFileSync(
    path.join(__dirname, "../../../../../../localhost+3.pem") // 정확한 경로로 수정
  ),
};

const PORT = process.env.PORT || 3007;
https.createServer(httpsOptions, app).listen(PORT, "0.0.0.0", () => {
  console.log(
    `HTTPS API endpoint available at https://192.168.0.xx:${PORT}/spotcontrol`
  );
});
