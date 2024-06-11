const path = require("path");
const dataMapper = require("../dataMapper");
const client = require("../database");

const bookmarksController = {
  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {
    if (request.session.bookmarks === undefined) {
      request.session.bookmarks = [];
    }
    const pageName = "favoris";
    figurines = request.session.bookmarks;
    response.render(pageName, { pageName, figurines });
  },

  addFigurineInSession: async (request, response) => {
    try {
      if (request.session.bookmarks === undefined) {
        request.session.bookmarks = [];
      }
      const figurineId = Number(request.params.id);
      const figurine = await dataMapper.getOneFigurine(figurineId);

      const find = request.session.bookmarks.find(
        (bookmark) => bookmark.id === figurineId
      );

      if (find === undefined) {
        request.session.bookmarks.push(figurine);
      }
      // si on trouve le bookmark qu'on veut rajouter dans les bookmarks on ne le rajoute pas

      console.log(request.session.bookmarks);
      response.redirect("/bookmarks");
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
      client.end();
    }
  },

  deleteFigurine: (request, response) => {
    if (request.session.bookmarks === undefined) {
      request.session.bookmarks = [];
    }
    const figurineId = Number(request.params.id);
    request.session.bookmarks = request.session.bookmarks.filter(
      (bookmark) => bookmark.id !== figurineId
    );
    console.log(request.session.bookmarks);
    response.redirect("/bookmarks");
  },
};

module.exports = bookmarksController;
