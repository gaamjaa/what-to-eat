const express = require("express");
const router = express.Router();
const ogs = require("open-graph-scraper");
// let options = {
//     url: "https://github.com/",
//     timeout: 4000
// }

// router.get("/", (req, res) => {
//     ogs(options, function(error, result) {
//         console.log("error: ", error);
//         console.log("results: ", result);
//         res.send({results: result});
//     })
// });

let options = { 
    url: "https://terms.naver.com/search.naver?query=화양적" }

router.get("/", (req, res) => {
    // res.send({test: "hi"});
    ogs(options)
        .then((data) => {
            const { error, result, response } = data;
            // console.log("error: ", error);
            // console.log("result: ", result);
            // console.log("response: ", response);
            res.send({result: result});
        })

})

module.exports = router;




// testPost.js에서 뻘짓했던 내용들..

// router.post("/", (req, res) => {
//     console.log("hihi")
//     console.log(req)
//     const url = req.body;
//     if(url){
//         options = {url: url}
//         ogs(options)
//         .then((data) => {
//             const { error, result, response } = data;
//             // console.log("error: ", error);
//             // console.log("result: ", result);
//             // console.log("response: ", response);
//             res.send({result: result});
//             res.sendStatus(200);
//         })
//     }
//     else{
//         res.sendStatus(400);
//     }

// })
// router.get("/", (req, res) => {
//     console.log(req.query);
//     console.log("hi");
//     res.send("hi")
// })
