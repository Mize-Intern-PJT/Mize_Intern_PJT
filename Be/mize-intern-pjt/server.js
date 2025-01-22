const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3002;
const cors = require("cors");

const key = fs.readFileSync(path.join(__dirname, "localhost+3-key.pem"));
const cert = fs.readFileSync(path.join(__dirname, "localhost+3.pem"));

app.use(
  cors({
    origin: "*", // 모든 도메인 허용
  })
);

const getData = () => {
  const files = [
    "cleanedCUBE.json",
    "cleanedHPS.json",
    "cleanedPlug.json",
    "cleanedPolar1.json",
    "cleanedPolar2.json",
    "cleanedSpot.json",
  ];
  let allData = [];

  files.forEach((file) => {
    const filePath = path.join(__dirname, "json/cleaned", file);
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const jsonData = JSON.parse(data);
      allData = allData.concat(jsonData);
    } catch (err) {
      console.error(`Error`, err);
    }
  });

  return allData;
};

app.get("/api", (req, res) => {
  const data = getData();
  res.json(data);
});

// app.listen(port, "0.0.0.0", () => {
//   console.log(`Server is running at http://0.0.0.0:${port}`);
// });

// HTTPS 서버 생성
https.createServer({ key, cert }, app).listen(port, "0.0.0.0", () => {
  console.log(`HTTPS Server is running at https://0.0.0.0:${port}`);
});
