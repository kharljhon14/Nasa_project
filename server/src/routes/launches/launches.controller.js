const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpgetAllLaunches(req, res) {
   return res.status(200).json(getAllLaunches());
}

function httpaddNewLaunch(req, res) {
   const launch = req.body;

   if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination) {
      return res.status(400).json({ error: "Missing required property" });
   }

   launch.launchDate = new Date(launch.launchDate);
   if (isNaN(launch.launchDate)) {
      return res.status(400).json({ error: "Invalid launch date" });
   }

   addNewLaunch(launch);
   //201 = created
   return res.status(201).json(launch);
}

module.exports = { httpgetAllLaunches, httpaddNewLaunch };
