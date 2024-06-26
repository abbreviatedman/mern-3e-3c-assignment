const router = require("express").Router();

const {
  getHomePage,
  getUsersPage,
  getGamesPage,
  getOneUserPage,
  getOneGamePage,
} = require("../controllers/viewController");

module.exports = router;
