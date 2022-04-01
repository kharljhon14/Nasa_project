const express = require("express");
const luanchesRouter = express.Router();

const { httpgetAllLaunches } = require("./launches.controller");

luanchesRouter.get("/launches", httpgetAllLaunches);

module.exports = luanchesRouter;
