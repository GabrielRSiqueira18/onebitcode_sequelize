const Game = require("../models/Game")

module.exports = {
	async create(req, res) {
		const { name, category } = req.body
		
		const game = await Game.create({ name, category })
		
		return res.status(201).json(game)
	},

	async get(req, res) {
		const games = await Game.findAll()

		return res.status(200).json(games)
	},

	async getAll(req, res) {
		const { name, category } = req.body
		
		await Game.update({ 
				name,
				category,
			},
			{
				where: {
					id: req.params.id,
				},
			})

		return res.status(200).send()
	},
	
	async delete(req, res) {
		await Game.destroy({
				where: {
					id: req.params.id,
				},
			})

		return res.status(204).send()
	}
}