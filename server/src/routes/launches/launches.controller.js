const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpgetAllLaunches(req, res) {
   return res.status(200).json(getAllLaunches());
}

function httpaddNewLaunch(req, res) {
   const launch = req.body;

   launch.launchDate = new Date(launch.launchDate);

   addNewLaunch(launch);
   //201 = created
   return res.status(201).json(launch); 
}

module.exports = { httpgetAllLaunches, httpaddNewLaunch };
