const express = require('express');
const router = express.Router();
const axios = require('axios');

const privateKey = 'dd3dc844307cf12d76810fcf93ee045373607fa1';
const publicKey = 'dad66d39785a779dfec6089c9393a02f';

const ts = Date.now();

const md5 = require('md5');
const hash = md5(ts + privateKey + publicKey);

router.get('/', async (req, res) => {
  const URI = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  const response = await axios.get(URI);

  res.json(response.data);
});

module.exports = router;
