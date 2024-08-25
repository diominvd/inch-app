const express = require('express')
const postRouter = express.Router()
const database = require('../config/database.js')
const checkHash = require('../utils/checkHash.js')

postRouter.post('/create_user', (request, response) => {
	response.send('hello')
	console.log('post')	
})

module.exports = postRouter;