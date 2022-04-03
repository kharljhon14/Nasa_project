const express = require("express");
const luanchesRouter = express.Router();

const { httpgetAllLaunches, httpaddNewLaunch, httpAbortLaunch } = require("./launches.controller");

luanchesRouter.get("/", httpgetAllLaunches);
luanchesRouter.post("/", httpaddNewLaunch);
luanchesRouter.delete("/:id", httpAbortLaunch);

module.exports = luanchesRouter;
