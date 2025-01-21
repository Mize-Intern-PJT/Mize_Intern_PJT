const express = require("express");
const axios = require("axios");
const CryptoJS = require("crypto-js");
const cors = require("cors");
const app = express();
const https = require("https");
const fs = require("fs");
const path = require("path");

app.use(cors());
app.use(express.json());

app.get("/data", async (req, res) => {
  // 필수 값 검증
  // if (!agt || me === undefined) {
  //   console.error("Invalid request body:", req.body);
  //   return res.status(400).send("Invalid request body");
  // }

  function getTime() {
    return Math.floor(Date.now() / 1000).toString(); // UNIX 타임스탬프 (초 단위)
  }

  function getSign(method, time, appkey, apptoken, userid, usertoken) {
    let signStr = `method:${method}`;
    signStr += `,time:${time}`;
    signStr += `,userid:${userid || "10001"}`;
    signStr += `,usertoken:${usertoken || "10001"}`;
    signStr += `,appkey:${appkey},apptoken:${apptoken}`;
    return CryptoJS.MD5(signStr).toString();
  }

  try {
    const timestamp = getTime();

    const response = await axios.post(
      "https://api.us.ilifesmart.com/app/api.EpGetAll",
      {
        id: "101",
        method: "EpGetAll",
        system: {
          ver: "1.0",
          lang: "en",
          sign: getSign(
            "EpGetAll",
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
      }
    );

    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error controlling device:", error);
    res.status(500).send("Error controlling device");
  }
});

const httpsOptions = {
  key: fs.readFileSync(
    path.join(__dirname, "../../../../../../localhost+3-key.pem") // 정확한 경로로 수정
  ),
  cert: fs.readFileSync(
    path.join(__dirname, "../../../../../../localhost+3.pem") // 정확한 경로로 수정
  ),
};

// const PORT = process.env.PORT || 3009;
// app.listen(PORT, () => {
//   console.log(`API endpoint available at http://localhost:${PORT}/data`);
// });

const PORT = process.env.PORT || 3009;
https.createServer(httpsOptions, app).listen(PORT, "0.0.0.0", () => {
  console.log(
    `HTTPS API endpoint available at https://192.168.0.xx:${PORT}/data`
  );
});
