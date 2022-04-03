const launches = new Map();

let latestFlightNumber = 100;

const launch = {
   flightNumber: 100,
   mission: "Kepler Exploration X",
   rocket: "Explorer IS1",
   launchDate: new Date("December 27, 2030"),
   target: "Kepler-442 b",
   customer: ["ZTM", "NASA", "Space X"],
   upcoming: true,
   success: true,
};

launches.set(launch.flightNumber, launch);

function existLaunchWithId(launchId) {
   return launches.has(launchId);
}

function getAllLaunches() {
   return Array.from(launches.values());
}

function addNewLaunch(launch) {
   latestFlightNumber += 1;
   launches.set(
      launch.flightNumber,
      Object.assign(launch, {
         flightNumber: latestFlightNumber,
         success: true,
         upcoming: true,
         customer: ["Zero to Mastery", "NASA"],
      })
   );
}

function abortLaunchById(launchId) {
   const aborted = launches.get(launchId);

   aborted.upcoming = false;
   aborted.success = false;
   return aborted;
}

module.exports = { getAllLaunches, addNewLaunch, existLaunchWithId, abortLaunchById };
