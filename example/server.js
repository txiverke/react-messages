// @flow

const express = require('express')
const path = require('path')
const app = express()
const PORT = 8080

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${String(PORT)} in (development).`)
})