const path = require("path");

const mainController = {
  // méthode pour la page d'accueil
  homePage: (request, response) => {
    const pageName = "accueil";
    response.render(pageName, { pageName });
  },

  // méthode pour la page article
  articlePage: (request, response) => {
    const pageName = "article";
    response.render(pageName, { pageName });
  },
};

module.exports = mainController;
