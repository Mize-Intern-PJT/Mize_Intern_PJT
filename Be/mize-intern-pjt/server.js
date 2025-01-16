const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3002;

const getData = () => {
  const files = [
    'cleanedCUBE.json', 
    'cleanedHPS.json', 
    'cleancleanedPlug.json', 
    'cleanedPolar1.json', 
    'cleanedPolar2.json', 
    'cleanedSpot.json'
  ];
  let allData = [];

  files.forEach(file => {
    try {
      const data = fs.readFileSync(path.join(__dirname, file), 'utf8');
      const jsonData = JSON.parse(data);
      allData = allData.concat(jsonData);
    } catch (err) {
      console.error(`Error`, err);
    }
  });

  return allData;
};

app.get('/api', (req, res) => {
  const data = getData();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
