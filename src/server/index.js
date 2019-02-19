const express = require('express')
const bodyParser = require('body-parser');
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const apiRouter = require('./resources/api.router')
const morgan = require('morgan');

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Set api route
  app.use('/api', [
    bodyParser.json(),
    bodyParser.urlencoded({extended: true}),
    apiRouter
  ]);

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })

  if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
}
start()
