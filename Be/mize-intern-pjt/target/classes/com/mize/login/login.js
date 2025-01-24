const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "db.env") });
const express = require("express");
const oracledb = require("oracledb");
const https = require("https");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECTION_STRING,
};

console.log("Database Config:", dbConfig);
console.log(`Server running on port ${port}`);

async function authenticate(userId, password) {
  let connection;

  try {
    console.log("Authenticating user:", userId);
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `SELECT * FROM users10 WHERE userid = :userid AND password = :password`,
      { userId, password }
    );

    return result.rows.length > 0;
  } catch (err) {
    console.error("Error during authentication:", err);
    return false;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
}

app.post("/login", async (req, res) => {
  const { userId, password } = req.body;
  console.log("Received login request for user:", userId);

  const isAuthenticated = await authenticate(userId, password);

  if (isAuthenticated) {
    res.status(200).json({ message: "success" });
  } else {
    console.error("Authentication failed for user:", userId);
    res.status(401).json({ message: "failed" });
  }
});

const httpsOptions = {
  key: fs.readFileSync(
    path.join(__dirname, "../../../../../../localhost+3-key.pem")
  ),
  cert: fs.readFileSync(
    path.join(__dirname, "../../../../../../localhost+3.pem")
  ),
};


https.createServer(httpsOptions, app).listen(port, '0.0.0.0', () => {
  console.log(`HTTPS API endpoint available at https://192.168.0.90:${port}/login`);
}
)
