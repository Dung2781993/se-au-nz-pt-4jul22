"use strict";
const axios = require("axios");

exports.getWeatherByLocation = async (req, res) => {
  try {
    // if(!req.query.lat || !req.query.long) {
    //     throw Error("Missing Lat and Long value");
    // }
    // let lat = req.query.lat;
    // let long = req.query.long;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.WEATHER_API_KEY_VALUE,
        "X-RapidAPI-Host": process.env.WEATHER_API_HOST,
      },
    };

    // const weatherAPI =  process.env.WEATHER_API_ENDPOINT + '?lat=' + lat + "&lng=" + long;
    // const userPostAPI =  process.env.USER_POST_API_ENDPOINT;
    const scoreBatAPI = process.env.SCOREBAT_API_ENDPOINT + "/?token=" + process.env.SCOREBAT_API_TOKEN;
    const response = await axios.get(scoreBatAPI);
    res.status(200);
    res.json({ success: true, data: response.data.response });
  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
};
