const { Router: expressRouter } = require("express");
const router = expressRouter();

// order routes
const orderRouter = require("./orderRoutes");
router.use("/order", orderRouter);

module.exports = router;