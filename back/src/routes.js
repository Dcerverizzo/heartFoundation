const express = require('express');

const SessionController = require('./controllers/SessionController');
const OrderServicesController = require('./controllers/OrderServicesController');



const routes = express.Router();


routes.post('/sessions', SessionController.store);

routes.post('/os', OrderServicesController.store);

routes.get('/os', OrderServicesController.show);

routes.get('/getos', OrderServicesController.index);


module.exports = routes;
