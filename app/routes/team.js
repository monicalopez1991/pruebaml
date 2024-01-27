const express = require("express")

const controller = require("../controllers/team")

const router = express.Router()

const path = "team"

router.get(
    `/${path}`,
    controller.getData
)

module.exports = router