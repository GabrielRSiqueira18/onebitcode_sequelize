const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")

const Consoles = sequelize.define("consoles", {
	name: DataTypes.STRING,
	brand: DataTypes.STRING,
	gameId: DataTypes.INTEGER,
})

module.exports = Consoles