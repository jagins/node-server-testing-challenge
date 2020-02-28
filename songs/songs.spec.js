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