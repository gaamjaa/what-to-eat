const express = require("express");
const router = express.Router();
const ogs = require("open-graph-scraper");
router.use(express.json())

router.post("/", (req, res) => {
    const {url} = req.body;
    console.log(url);
    const options = {url: url}
    ogs(options)
        .then((data) => {
            const {error, result, response} = data;
            console.log(result)
            res.json({result: result});
        })
    // res.json({message: "hihi"});
})

module.exports = router;