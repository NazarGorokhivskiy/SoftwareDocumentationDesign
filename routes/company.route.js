import express from "express";
import typedi from "typedi";
import CompanyService from "../services/company.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const companyService = Container.get(CompanyService);

    const companys = await companyService.getAll();

    return res.json(companys);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const companyService = Container.get(CompanyService);

    const company = req.body;

    await companyService.create(company);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const companyService = Container.get(CompanyService);

    const id = req.params.id;

    const updateValues = req.body;

    await companyService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const companyService = Container.get(CompanyService);

    const companyId = req.params.id;

    await companyService.delete(companyId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
