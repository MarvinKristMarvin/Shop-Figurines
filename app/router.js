const express = require("express");

// on importe nos controllers
const mainController = require("./controllers/mainController");
const bookmarksController = require("./controllers/bookmarksController");

const router = express.Router();

// page d'accueil
router.get("/", mainController.homePage);

// page article (ajout de route paramétrée)
router.get("/article/:id", mainController.articlePage);

// page favoris
router.get("/bookmarks", bookmarksController.bookmarksPage);
router.get("/bookmarks/add/:id", bookmarksController.addFigurineInSession);
router.get("/bookmarks/delete/:id", bookmarksController.deleteFigurine);
// on exporte le router
module.exports = router;
