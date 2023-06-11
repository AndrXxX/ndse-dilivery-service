const express = require('express');
const router = express.Router();
const advertisementListHandler = require('./handlers/AdvertisementListHandler');
const createAdvertisementHandler = require('./handlers/CreateAdvertisementHandler');
const fileMiddleware = require("../../middleware/api/file");
const authMiddleware = require("../../middleware/api/auth");

router.get('/',
  advertisementListHandler,
);

router.use(authMiddleware);

router.post('/',
  fileMiddleware.fields([
    {name: 'images'},
  ]),
  createAdvertisementHandler,
);

module.exports = router;
