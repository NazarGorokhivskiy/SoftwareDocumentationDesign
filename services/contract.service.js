import ContractModel from "../models/contract.js";
import { generateRandId } from "../utils.js";

export default class ContractService {
  async getAll() {
    const foundContracts = await ContractModel.findAll({
      order: [["id", "DESC"]],
    });

    return foundContracts;
  }

  async create(contract) {
    const newContract = {
      id: generateRandId(),
      ...contract,
    };

    const contractRecord = await ContractModel.create(newContract);

    return contractRecord;
  }

  async update(contractId, newValues) {
    const updatedContract = await ContractModel.update(newValues, {
      where: { id: contractId },
    });

    return updatedContract;
  }

  async delete(contractId) {
    await ContractModel.destroy({
      where: { id: contractId },
    });
  }
}
