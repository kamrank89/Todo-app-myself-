/* Express Calling */
const express = require('express')
const app = express()
const port = 3000


/* Using static files in express */
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

/* Starting Express */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})