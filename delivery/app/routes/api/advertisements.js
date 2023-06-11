const express = require('express');
const router = express.Router();
const createAdvertisementHandler = require('./handlers/CreateAdvertisementHandler');
const fileMiddleware = require("../../middleware/api/file");

router.post('/',
  fileMiddleware.fields([
    {name: 'images'},
  ]),
  createAdvertisementHandler,
);

module.exports = router;
