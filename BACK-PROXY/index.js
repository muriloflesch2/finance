const express = require('express');
const request = require('request');
var cors = require('cors');
const url = require('url');

const app = express();
const API_URL = 'https://query2.finance.yahoo.com/v8/finance/chart/' 
app.use(cors())
app.use((req, res, next) => {
  next();
});

app.get('/api/:company', (req, res) => {
  request(
    { url: `${API_URL + req.params.company}?interval=${req.query.interval}&range=${req.query.range}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));