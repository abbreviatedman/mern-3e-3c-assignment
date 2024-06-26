const User = require("../models/usersModel");
const Game = require("../models/gamesModel");

async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.json({
      message: "success",
      payload: users,
    });
  } catch (error) {
    const errorObj = {
      message: "get user failure",
      payload: error,
    };

    console.log(errorObj);
    res.json(errorObj);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.json({
      message: "success",
      payload: user,
    });
  } catch (error) {
    const errorObj = {
      message: "create user failure",
      payload: error,
    };

    console.log(errorObj);
    res.json(errorObj);
  }
}

async function userLikesGame(req, res) {
  try {
    const user = await User.findOne({ _id: req.params.id });
    user.likedGames.push(req.body.gameId);
    user.save();
    res.json({
      message: "success",
      payload: user,
    });
  } catch (error) {
    const errorObj = {
      message: "user Likes Game failure",
      payload: error,
    };

    console.log(errorObj);
    res.json(errorObj);
  }
}

module.exports = {
  createUser,
  getUsers,
  userLikesGame,
};
