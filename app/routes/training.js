const express = require("express")

const controller = require("../controllers/training")

const router = express.Router()

const path = "training"

router.post(
    `/${path}`,
    controller.postData
)

module.exports = router


