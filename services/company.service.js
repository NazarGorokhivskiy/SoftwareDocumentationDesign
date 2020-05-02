import CompanyModel from "../models/company.js";
import { generateRandId } from "../utils.js";

export default class CompanyService {
  async getAll() {
    const foundCompanys = await CompanyModel.findAll({
      order: [["id", "DESC"]],
    });

    return foundCompanys;
  }

  async create(company) {
    const newCompany = {
      id: generateRandId(),
      ...company,
    };

    const companyRecord = await CompanyModel.create(newCompany);

    return companyRecord;
  }

  async update(companyId, newValues) {
    const updatedCompany = await CompanyModel.update(newValues, {
      where: { id: companyId },
    });

    return updatedCompany;
  }

  async delete(companyId) {
    await CompanyModel.destroy({
      where: { id: companyId },
    });
  }
}
