const request = require('supertest')
const app = require('../src/app')
const connection = require('../src/database/connection')

const equipments = [
{
    model: "Epson L3150",
    category: "cartucho",
    ppm: 30,
    wifi: "true",
    consumption: 1770
},
{
    model: "Samsung LX4000",
    category: "toner",
    ppm: 150,
    wifi: "false",
    consumption: 5000
},
{
    model: "Epson L355",
    category: "cartucho",
    ppm: 30,
    wifi: "true",
    consumption: 1500
}
]

describe('equipments',()=>{
    beforeEach( async ()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll( async ()=>{
        await connection.destroy()
    })

    it('should be able to create a new equipment', async ()=>{
        const response = await request(app)
        .post('/equipments')
        .send(equipments[0])
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })

    it('should be able to return a json array with a list of equipments', async ()=>{

        equipments.forEach(async equipment =>{
        await request(app)
        .post('/equipments')
        .send(equipment)
        })

        const responseGet = await request(app)
            .get('/equipments')
            expect(Array.isArray(responseGet.body)).toBe(true)
            expect(responseGet.body[0]).toHaveProperty('id')
            expect(responseGet.body[0]).toHaveProperty('model')
            expect(responseGet.body[0]).toHaveProperty('category')
            expect(responseGet.body[0]).toHaveProperty('ppm')
            expect(responseGet.body[0]).toHaveProperty('wifi')
            expect(responseGet.body[0]).toHaveProperty('consumption')

    })

    it('should be able to update the data from an equipment', async ()=>{

        const response = await request(app)
        .post('/equipments')
        .send(equipments[0])
        
        const {id} = response.body

        const responsePut = await request(app)
        .put(`/equipments/${id}`)
        .send(equipments[1])
        expect(responsePut.status).toBe(200)

    })

    it('should be able to delete an equipment', async ()=>{

        const response = await request(app)
        .post('/equipments')
        .send(equipments[0])
        
        const {id} = response.body

        const responseDelete = await request(app)
        .delete(`/equipments/${id}`)
        .send()
        expect(responseDelete.status).toBe(204)


    })

})