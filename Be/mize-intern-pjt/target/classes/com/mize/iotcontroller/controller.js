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

app.post("/control", async (req, res) => {
  const { agt, me, idx, type, val } = req.body;

  if (!agt || !me || !idx || !type || val === undefined) {
    console.error("Invalid request body:", req.body);
    return res.status(400).send("Invalid request body");
  }

  function getTime() {
    return Math.floor(Date.now() / 1000).toString(); 
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
      "https://api.us.ilifesmart.com/app/api.EpSet",
      {
        id: "101",
        method: "EpSet",
        system: {
          ver: "1.0",
          lang: "en",
          sign: getSign(
            "EpSet",
            { agt: agt, me: me, idx: idx, type: type, val: val },
            timestamp,
            "CWNu6tF1jpZ1eD9s36IA6A",
            "wOxwHxsdwHODCoDVFxPZog",
            "8390501",
            "dB3Goflx4IpifWSXhKsmEA"
          ),
          userid: "8390501",
          appkey: "CWNu6tF1jpZ1eD9s36IA6A",
          time: timestamp, 
        },
        params: {
          agt: agt,
          me: me,
          idx: idx,
          type: type,
          val: val,
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

const httpsOptions = {
  key: fs.readFileSync(
    path.join(__dirname, "../../../../../../localhost+3-key.pem")
  ),
  cert: fs.readFileSync(
    path.join(__dirname, "../../../../../../localhost+3.pem") ),
};

const PORT = process.env.PORT || 3008;
https.createServer(httpsOptions, app).listen(PORT, "0.0.0.0", () => {
  console.log(
    `HTTPS API endpoint available at https://192.168.0.xx:${PORT}/control`
  );
});
