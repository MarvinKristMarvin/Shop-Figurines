const client = require("./database");

const dataMapper = {
  getAllFigurines: async () => {
    const allFigurines = await client.query("SELECT * FROM figurine");
  },

  getOneFigurine: async (id) => {
    const figurine = await client.query(
      `SELECT * FROM figurine WHERE id = ${id}`
    );
  },
};

module.exports = dataMapper;
