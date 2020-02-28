const request = require('supertest');

const server = require('../api/server');

describe('GET /api/songs', function()
{
    test('should return 200 okay', function()
    {
        return request(server)
            .get('/api/songs')
            .then(res =>
            {
                expect(res.status).toBe(200);
            })
    })

    test('should return songs as an array', function()
    {
        return request(server)
            .get('/api/songs')
            .then(res =>
            {
                expect(Array.isArray(res.body)).toBe(true);
            })
    })
})

describe('POST /api/songs', function()
{
    test('should return a 201 created', function()
    {
        return request(server)
            .post('/api/songs')
            .send({title: 'everlong', artist: 'foo fighters', album: 'the colour and the shape'})
            .then(res =>
            {
                expect(res.status).toBe(201);
            })
    })

   test('should return object with sent values', function()
   {
        const song = {
            title: 'hail to the king',
            artist: 'avenged sevenfold',
            album: 'hail to the king'
        }

        return request(server)
            .post('/api/songs')
            .send(song)
            .then(res =>
            {
               expect(res.body).toStrictEqual({id: res.body.id, ...song});
            })
   })
})