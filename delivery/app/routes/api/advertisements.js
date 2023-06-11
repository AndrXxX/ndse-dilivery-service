const express = require('express');
const router = express.Router();
const advertisementListHandler = require('./handlers/AdvertisementListHandler');
const advertisementCreateHandler = require('./handlers/AdvertisementCreateHandler');
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
  advertisementCreateHandler,
);

module.exports = router;
