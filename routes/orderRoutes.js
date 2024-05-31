const express = require("express");
const orderController = require("../controllers/orderController")
const orderRouter = express.Router();

orderRouter.route("/").post(orderController.dialogWebhook);

module.exports = orderRouter;