const express = require("express");
const rateLimiter = require("./rateLimiter");
const validator = require("./validator");
const db = require("./database");

const router = express.Router();

router.post("/data", rateLimiter, validator, (req, res) => {
  db.save(req.body);
  res.status(201).json({ success: true });
});

router.get("/data", (req, res) => {
  res.json(db.getAll());
});

module.exports = router;
