const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const crypto = require('crypto'); // 암호화 라이브러리 추가
const app = express();
const port = 3000;

app.use(bodyParser.json());

const APP_KEY = "CWNu6tF1jpZ1eD9s36IA6A";
const CALLBACK_URL = "http://localhost:8081/auth_callback";
const APP_TOKEN = "wOxwHxsdwHODCoDVFxPZog";

function calculateSign(appkey, callbackurl, apptoken) {
    const tick = Math.floor(Date.now() / 1000);
    let sdata = `appkey=${appkey}&auth_callback=${callbackurl}&time=${tick}&apptoken=${apptoken}`;
    return crypto.createHash('md5').update(sdata, 'utf-8').digest('hex');
}

app.post('/controller', async (req, res) => {
  const apiUrl = 'https://api.us.ilifesmart.com/app/api.EpSet'; // 실제 IoT 기기 API URL
  const requestData = {
      id: "101",
      method: "EpSet",
      system: {
          ver: "1.0",
          lang: "en",
          sign: calculateSign(APP_KEY, CALLBACK_URL, APP_TOKEN),
          userid: "8390501",
          appkey: "CWNu6tF1jpZ1eD9s36IA6A",
          time: new Date().toISOString()
      },
      params: {
          agt: "BjMAADSYeAEAAAteSQz__w",
          me: "61a9",
          idx: "P1",
          type: req.body.type,
          val: req.body.val
      }
  };
  
  try {
    const response = await axios.post(apiUrl, requestData);
    res.json(response.data);
  } catch (error) {
    console.error('Error controlling device:', error);
    res.status(500).json({ error: 'Failed to control device' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
