const express = require('express')

const app = express()
const PORT = 3000
app.use(express.json())


app.get('/download', async (req, res) => {
const { downloadTiktok } = require("@mrnima/tiktok-downloader");
var result = await downloadTiktok(req.query.url);
res.json({
success: true,
data: result
})})

app.listen(PORT, () => {
console.log(`Running on PORT ${ PORT }`)
})
/*
your_host/download?url=https://vt.tiktok.com/ZS2vSs5fL/
*/
