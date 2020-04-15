import express from "express";
import typedi from "typedi";
import ContractService from "../services/contract.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const contractService = Container.get(ContractService);

    const contracts = await contractService.getAll();

    return res.json(contracts);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const contractService = Container.get(ContractService);

    const contract = req.body;

    await contractService.create(contract);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const contractService = Container.get(ContractService);

    const id = req.params.id;

    const updateValues = req.body;

    await contractService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const contractService = Container.get(ContractService);

    const contractId = req.params.id;

    await contractService.delete(contractId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
