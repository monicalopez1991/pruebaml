const express = require("express")

const controller = require("../controllers/params")

const router = express.Router()

const path = "params"

router.put(
    `/${path}`,
    controller.putData
)

module.exports = router