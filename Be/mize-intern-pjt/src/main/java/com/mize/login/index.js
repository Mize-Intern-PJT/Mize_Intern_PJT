require("dotenv").config(); // .env 파일의 변수 로드
const express = require("express");
const oracledb = require("oracledb");
const https = require("https");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3005;

// 미들웨어 설정
app.use(express.json());

// 데이터베이스 연결 정보
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECTION_STRING,
};

// 사용자를 인증하는 함수
async function authenticate(userId, password) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `SELECT * FROM users WHERE userid = :userid AND password = :password`,
      {
        userid: userId,
        password: password,
      }
    );

    return result.rows.length > 0;
  } catch (err) {
    console.error(err);
    return false;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

// 로그인 엔드포인트
app.post("/login", async (req, res) => {
  const { userId, password } = req.body;

  const isAuthenticated = await authenticate(userId, password);

  if (isAuthenticated) {
    res.status(200).json({ message: "success" });
  } else {
    res.status(401).json({ message: "failed" });
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

// app.listen(port, () => {
//   console.log(`Server running on port ${port}/login`);
// });

const PORT = process.env.PORT || 3005;
https.createServer(httpsOptions, app).listen(PORT, "0.0.0.0", () => {
  console.log(
    `HTTPS API endpoint available at https://192.168.0.xx:${PORT}/login`
  );
});
