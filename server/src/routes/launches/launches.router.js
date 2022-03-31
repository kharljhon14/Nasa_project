const express = require("express");
const luanchesRouter = express.Router();

const { getAllLaunches } = require("./launches.controller");

luanchesRouter.get("/launches", getAllLaunches);

module.exports = luanchesRouter;
