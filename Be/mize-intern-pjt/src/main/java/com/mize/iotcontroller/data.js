const express = require("express");
const axios = require("axios");
const CryptoJS = require("crypto-js");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/data", async (req, res) => {
  const { agt, me} = req.body;

  // 필수 값 검증
  if (!agt || me === undefined) {
    console.error("Invalid request body:", req.body);
    return res.status(400).send("Invalid request body");
  }

  function getTime() {
    return Math.floor(Date.now() / 1000).toString(); // UNIX 타임스탬프 (초 단위)
  }

  function getSign(method, params, time, appkey, apptoken, userid, usertoken) {
    const paramKeyArr = [];
    if (params) {
      for (const key in params) {
        paramKeyArr.push(key);
      }
      paramKeyArr.sort();
    }
    let signStr = `method:${method}`;
    if (paramKeyArr.length > 0) {
      for (let i = 0; i < paramKeyArr.length; i++) {
        const k = paramKeyArr[i];
        const v = params[k];
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

    const response = await axios.post(
      "https://api.us.ilifesmart.com/app/api.EpGet",
      {
        id: "101",
        method: "EpGet",
        system: {
          ver: "1.0",
          lang: "en",
          sign: getSign(
            "EpGet", 
            { agt: agt, me: me },
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
          me: me
        },
      }
    );

    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error controlling device:", error);
    res.status(500).send("Error controlling device");
  }
});

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`API endpoint available at http://localhost:${PORT}/data`);
});
