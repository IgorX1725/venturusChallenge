const knex = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    async index(req,res){
        const results = await knex('equipments')
        return res.json(results)
    },

    async create(req,res,next){
        try {
            const id = generateUniqueId()
            const {model, category, ppm, wifi, consumption} = req.body
            await knex('equipments')
            .insert({
                id,
                model,
                category,
                ppm,
                wifi,
                consumption
            })
           res.status(201).json({id})
        } catch (error) {
            next(error)
        }
    },

    async update(req,res,next){
    try {
        const {id} = req.params

        const equipment = await knex('equipments').where('id',id).first()

        if(equipment == undefined){
            return res.status(401).json({error: 'incident not found'})
        }
        
        const {model, category, ppm, wifi, consumption} = req.body
        await knex('equipments')
        .update({
            model,
            category,
            ppm,
            wifi,
            consumption
        }).where({id})
       res.send()
    } catch (error) {
        next(error)
    }

    },

    async delete(req,res,next){
        try {
        const {id} = req.params

        const equipment = await knex('equipments').where('id',id).first()
        
        if(equipment == undefined){
            return res.status(401).json({error: 'incident not found'})
        }

        await knex('equipments')
        .where({id})
        .del()
        res.status(204).send();

        } catch (error) {
            next(error)
        }
    
        }
}