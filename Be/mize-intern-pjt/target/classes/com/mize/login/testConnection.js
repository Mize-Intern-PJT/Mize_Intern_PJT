require('dotenv').config({ path: require('path').resolve(__dirname, 'db.env') });
const oracledb = require("oracledb");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECTION_STRING,
};

async function testConnection() {
  let connection;
  
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log("Connection successful!");
  } catch (err) {
    console.error("Connection failed!", err);
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

// 테스트 실행
testConnection();
