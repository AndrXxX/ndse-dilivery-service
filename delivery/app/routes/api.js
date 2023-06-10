const express = require('express');
const router = express.Router();
const error404Middleware = require("../middleware/api/404");
const authMiddleware = require("../middleware/api/auth");
const userRouter = require("./api/user");

router.use(userRouter);
router.use(authMiddleware);
router.use(error404Middleware);

module.exports = router;
