const express = require("express")
const routes = express.Router()
const GameContoller = require("../controller/GameContoller")
const ConsoleContoller = require("../controller/ConsoleController")

routes.post("/games", GameContoller.create)
routes.get("/games", GameContoller.get)
routes.put("/games/:id", GameContoller.getAll)
routes.delete("/games/:id", GameContoller.delete)

routes.post("/games/:gameId/consoles", ConsoleContoller.create)
routes.get("/games/:gameId/consoles", ConsoleContoller.get)

module.exports = routes