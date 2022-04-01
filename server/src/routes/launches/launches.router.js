const express = require("express");
const luanchesRouter = express.Router();

const { httpgetAllLaunches, httpaddNewLaunch } = require("./launches.controller");

luanchesRouter.get("/", httpgetAllLaunches);
luanchesRouter.post("/", httpaddNewLaunch);

module.exports = luanchesRouter;
