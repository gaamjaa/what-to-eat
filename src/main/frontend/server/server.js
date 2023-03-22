const express = require('express');
const app = express();
const port = 5000;
// const cors = require("cors");
// const bodyParser = require("body-parser");
const test = require("./Router/test");
const testPost = require("./Router/testPost");
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cors());
// app.use(bodyParser.json())
app.use("/node", test);
app.use("/nodePost", testPost);
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/node', (req, res) => {
//     res.send({test:"nodejs"})
// })

// app.post("/text", (req, res) => {
//     const text1 = req.body.inText;
//     console.log(text1);
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})