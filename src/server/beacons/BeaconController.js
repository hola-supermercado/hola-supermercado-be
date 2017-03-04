'use strict';

const beaconData = require('./BeaconData');

const beaconController = {
  getAll(req, res) {
    res
      .status(200)
      .json(beaconData);
  },
  getBeaconsForLocation(req,res) {
    var latlon = req.params.latlon.split(",");
    if(latlon.length != 2) {
        res
        .status(400)
        .send('Invalid input. Should be in format \"&lt;latitude&gt;,&lt;longitude&gt;\"');
    }
    var lat = latlon[0];
    var lon = latlon[1];
    res
      .status(200)
      .json(beaconData);
  }
};

module.exports = beaconController;
