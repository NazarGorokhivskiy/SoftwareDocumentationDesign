import express from "express";
import typedi from "typedi";
import AgentService from "../services/insurance_agent.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const agentService = Container.get(AgentService);

    const agents = await agentService.getAll();

    return res.json(agents);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const agentService = Container.get(AgentService);

    const agent = req.body;

    await agentService.create(agent);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const agentService = Container.get(AgentService);

    const id = req.params.id;

    const updateValues = req.body;

    await agentService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const agentService = Container.get(AgentService);

    const agentId = req.params.id;

    await agentService.delete(agentId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
