const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query

    const [count] = await connection('ongs').count()

    const ongs = await connection('ongs')
      .limit(5)
      .offset((page -1) * 5)
      .select([
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ])
    
    res.header('X-Total-Count', count['count(*)'])
  
    return res.json(ongs)
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body
    
    const id = generateUniqueId()
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    
    return res.json({ id })
  }
}