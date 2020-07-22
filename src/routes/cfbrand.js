import { Router } from "express";
import models from "../models/index";
// const models = require("../models/index");
const path = require("path");
const cfbrand = require(path.join("../models", "/cfbrand.js"));

const router = Router();

router.get("/", async (req, res) => {
  const users = await req.context.models.Cfbrand.findAll();
  return res.send(users);
});

export default router;
