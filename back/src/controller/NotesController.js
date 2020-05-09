const connection = require('../database/connection');

module.exports = {
  async index(req,res) {
    const notes = await connection('notes').select('*');

    return res.json(notes);
  },

  async create(req,res) {
    const { note_name,content } = req.body;

    await connection('notes').insert({
      note_name,
      content
    });

    return res.status(200).send();
  },

  async read(req,res) {
    const { id } = req.params;

    const note = await connection('notes').where('id',id).first();

    return res.json(note);
  },

  async update(req,res) {
    const { id } = req.params;
    const { note_name, content } = req.body;

    await connection('notes').where('id',id).update({
      note_name,
      content
    });

    return res.status(200).send();
  },

  async delete(req,res) {
    const { id } = req.params;

    await connection('notes').where('id',id).delete();

    return res.status(204).send();
  }
}