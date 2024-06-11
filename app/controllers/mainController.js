const path = require("path");
const dataMapper = require("../dataMapper");
const client = require("../database");

const mainController = {
  // méthode pour la page d'accueil
  homePage: async (request, response) => {
    try {
      const allFigurines = await dataMapper.getAllFigurines();
      const pageName = "accueil";
      response.render(pageName, { pageName, allFigurines });
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
      client.end();
    }
  },

  // méthode pour la page article
  articlePage: async (request, response) => {
    try {
      const figurineId = Number(request.params.id);
      const figurine = await dataMapper.getOneFigurine(figurineId);
      const pageName = "article";
      response.render(pageName, { pageName, figurine });
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
      client.end();
    }
  },
};

module.exports = mainController;
