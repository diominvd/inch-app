const express = require('express')
const getRouter = express.Router()
const database = require('../config/database.js')

getRouter.get('/get_user', (request, response) => {
	response.send('hello')
	console.log('get')
})

module.exports = getRouter;