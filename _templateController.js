module.exports = (modelName, prisma) => ({
  async getAll(req, res) {
    try {
      const data = await prisma[modelName].findMany();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const data = await prisma[modelName].findUnique({
        where: { id: Number(req.params.id) },
      });
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const data = await prisma[modelName].create({ data: req.body });
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const data = await prisma[modelName].update({
        where: { id: Number(req.params.id) },
        data: req.body,
      });
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

 async delete(req, res) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Cek apakah data ada dulu
    const existing = await prisma[modelName].findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Record not found" });
    }

    const data = await prisma[modelName].delete({ where: { id } });
    res.json({ message: "Deleted successfully", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

});
