const express = require('express');
const router = express.Router();
const advertisementsListHandler = require('./handlers/AdvertisementsListHandler');
const createAdvertisementHandler = require('./handlers/CreateAdvertisementHandler');
const fileMiddleware = require("../../middleware/api/file");
const authMiddleware = require("../../middleware/api/auth");

router.get('/',
  advertisementsListHandler,
);

router.use(authMiddleware);

router.post('/',
  fileMiddleware.fields([
    {name: 'images'},
  ]),
  createAdvertisementHandler,
);

module.exports = router;
