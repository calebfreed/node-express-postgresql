const router = require("express").Router();
const controller = require("./products.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:productId([0-9]+)").get(controller.read).all(methodNotAllowed);
router.route("/products/out-of-stock-count").get(controller.listOutOfStockCount).all(methodNotAllowed);

module.exports = router;