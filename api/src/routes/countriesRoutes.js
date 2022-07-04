const { Router } = require("express");
const axios = require("axios");
const router = Router();



router.get("/", (req, res, next) =>{
    console.log("soy el get mas picante del condado")
})

router.get("/:id", (req, res, next) =>{
    console.log("soy el")
})


module.exports = router