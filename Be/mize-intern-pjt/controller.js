const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/controller', async (req, res) => {
  const apiUrl = 'https://api.us.ilifesmart.com/app/api.EpSet'; // 실제 IoT 기기 API URL
  const requestData = req.body;
  
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
