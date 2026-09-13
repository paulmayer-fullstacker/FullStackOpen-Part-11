# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full Stack Open course

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

## Ex 10-12

### Ex-10: Deployment to Render

Deployed app can be found at: https://fullstackopen-part-11.onrender.com

### Ex-12: Health Check

Code added to app.js:

```js
// Health Check Endpoint: Render sends a GET request to '/health' after building the app.
// If the endpoint responds with a success (HTTP 200) status, Render knows the server is healthy and will direct traffic to this new deployment.
app.get('/health', (req, res) => {
  // // eslint-disable-next-line no-constant-condition
  // if (true) throw 'error...  ' // Test Heath Check by simulating failure. Remove during normal use.
  res.send('ok')
})
```

Modify code to force health check failure:

```js
app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw 'error...  '
  res.send('ok')
})
```

