const router = require("express").Router();

const { STDmodel } = require("../../models");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const stdModelData = await STDmodel.findAll({});
    res.status(200).json(stdModelData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
