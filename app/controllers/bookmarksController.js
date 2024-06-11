const path = require("path");

const bookmarksController = {
  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {
    const pageName = "favoris";
    response.render(pageName, { pageName });
  },
};

module.exports = bookmarksController;
