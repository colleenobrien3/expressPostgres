import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log(req.context.models);
  return res.json(Object.values(req.context.models.User));
});

router.get("/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;
