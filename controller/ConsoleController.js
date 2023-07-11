const Console = require("../models/Consoles")
const Game = require("../models/Game")

module.exports = {
	async create(req, res) {
		const { gameId } = req.params
		const { name, brand } = req.body

		const game = await Game.findByPk(gameId)
		
		if(!game) {
			return res.status(400).send({ message: 'Game not exist.' })
		}

		const consoles = await Console.create({ name, brand, gameId })


		return res.status(201).json(consoles)
	},

	async get(req, res) {
		const { gameId } = req.params

		const consoles = await Console.findAll({
			where: {
				gameId,
			}
		})

		return res.status(200).json(consoles)
	}
}