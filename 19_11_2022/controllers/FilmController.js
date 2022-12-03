"use strict";

const Film = require("../models/Film");

exports.getAllFilms = async (req, res) => {
  const response = await Film.getAllFilms(req);
  if (!response.success) {
    res.status(400);
    res.json({ success: false, message: response.message });
  }
  res.send({ success: true, data: response });
};

exports.updateFilm = async (req, res) => {
  const response = await Film.updateFilm(req);
  if (!response.success) {
    res.status(400);
    res.json({ success: false, message: response.message });
  }
  res.send({ success: true, data: response });
};
