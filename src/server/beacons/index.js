'use strict';

const beaconsRouter = require('express').Router();
const beaconsController = require('./BeaconController');
//const authentication = require('./../session').authentication;

//beaconsRouter.all('*', authentication.requireAuthentication);

beaconsRouter.route('/')
  .get(beaconsController.getAll);
//  .post(beaconsController.setUser);

beaconsRouter.route('/:latlon')
  .get(beaconsController.getBeaconsForLocation);
//  .delete(beaconsController.deleteUser);

module.exports = beaconsRouter;
