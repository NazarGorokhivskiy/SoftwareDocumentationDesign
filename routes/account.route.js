import express from "express";
import typedi from "typedi";
import AccountService from "../services/account.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const accountService = Container.get(AccountService);

    const accounts = await accountService.getAll();

    return res.json(accounts);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const accountService = Container.get(AccountService);

    const account = req.body;

    await accountService.create(account);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const accountService = Container.get(AccountService);

    const id = req.params.id;

    const updateValues = req.body;

    await accountService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const accountService = Container.get(AccountService);

    const accountId = req.params.id;

    await accountService.delete(accountId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
