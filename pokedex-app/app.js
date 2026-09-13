// app.js:

const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// Health Check Endpoint: Render sends a GET request to '/health' after building the app.
// If the endpoint responds with a success (HTTP 200) status, Render knows the server is healthy and will direct traffic to this new deployment.
app.get('/health', (req, res) => {
  // // eslint-disable-next-line no-constant-condition
  // if (true) throw 'error...  ' // Test Heath Check by simulating failure. Remove during normal use.
  res.send('ok')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
