import express from "express";

import PrintService from "../services/print.service.js";
import FileService from "../services/file.service.js";
import ConsoleStrategy from "../services/print_strategies/ConsoleStrategy.js";
import KafkaStrategy from "../services/print_strategies/KafkaStrategy.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    // Reading the file content
    const fileContent = await FileService.getAgents(0, 20);

    // Initializing file printing strategy
    const strategy = new ConsoleStrategy();
    
    const printService = new PrintService(strategy);

    // Printing the file
    printService.print(fileContent);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
