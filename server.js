const port = process.env.PORT || 3030;

const express = require('express')
const app = express()

app.use(express.static('deploy_example'))
app.listen(port)
console.log(`Deploy example server up and listening on port:${port}`)    