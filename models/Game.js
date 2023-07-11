const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")

const Game = sequelize.define("games", {
	name: DataTypes.STRING,
	category: DataTypes.STRING,
})

module.exports = Game