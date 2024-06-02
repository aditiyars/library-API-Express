const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const docs = require('./documentation/openapi.json')

module.exports = (app) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(docs))
}