const { Message } = require("../models");

exports.getAll = async (req, res) => {
  const data = await Message.findAll({ order: [["id", "ASC"]] });
  res.json(data);
};

exports.create = async (req, res) => {
  const { content } = req.body;

  if (!content || content.length < 3) {
    return res.status(400).json({ error: "Min 3 znaki" });
  }

  const msg = await Message.create({ content });
  res.json(msg);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!content || content.length < 3) {
    return res.status(400).json({ error: "Min 3 znaki" });
  }

  await Message.update({ content }, { where: { id } });
  res.json({ success: true });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Message.destroy({ where: { id } });
  res.json({ success: true });
};