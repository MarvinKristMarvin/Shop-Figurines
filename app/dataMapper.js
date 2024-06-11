const client = require("./database");

const dataMapper = {
  getAllFigurines: async () => {
    const allFigurines = await client.query("SELECT * FROM figurine");
    return allFigurines.rows;
  },

  getOneFigurine: async (id) => {
    const figurine = await client.query(
      `SELECT * FROM figurine WHERE id = ${id}`
    );
    return figurine.rows[0];
  },
};

module.exports = dataMapper;
