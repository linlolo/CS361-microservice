const express = require('express');
const app = express();
const spell = require('spell-checker-js');
spell.load('en');

app.use(express.json());
app.enable('trust proxy');

app.get('/', (req, res) => {
  res.status(200).send('works!');
});

app.post('/', (req, res) => {
  if (!req.body.text || typeof req.body.text !== 'string') {
    return res.status(404).json({ Error: 'Invalid Body' });
  }

  const check = spell.check(req.body.text);
  const checkRemoveNum = check.filter((word) => isNaN(parseFloat(word)));
  res.status(200).json({ invalidWords: checkRemoveNum });
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
