const express = require('express');
const router = express.Router();
const advertisementListHandler = require('./handlers/AdvertisementListHandler');
const advertisementCreateHandler = require('./handlers/AdvertisementCreateHandler');
const advertisementRemoveHandler = require('./handlers/AdvertisementRemoveHandler');
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

router.delete('/:id',
  advertisementRemoveHandler,
);

module.exports = router;
