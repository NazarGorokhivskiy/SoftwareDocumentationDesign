import express from "express";
import AgentService from "../services/insurance_agent.service.js";
import FileService from "../services/file.service.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const fileContent = await FileService.getAgents(0, 12);

    const agentService = new AgentService();

    fileContent.forEach((line) => {
      const entity = AgentService.fromCSVtoEntity(line);

      agentService.create(entity);
    });

    return res.send(200);
  } catch (e) {
    next(e);
  }
});

export default router;
