const Games = require("../models/Game")
const Consoles = require("../models/Consoles")

Games.hasMany(Consoles, {
	oneDelete: "CASCADE",
	onUpdate: "CASCADE",
})

Consoles.belongsTo(Games, { foreingKey: "gameId", as: "game" })

module.exports = { Games, Consoles }