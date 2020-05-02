import typedi from "typedi";
import AgentModel from "../models/insurance_agent.js";
import { generateRandId } from "../utils.js";
import FileService from "./file.service.js";

export default class AgentService {
  static fromCSVtoEntity(csvAgent) {
    const values = csvAgent.split(",");

    return {
      first_name: values[0],
      last_name: values[1],
      position: values[2],
      start_date: values[3],
      email: values[4],
    };
  }

  static loadFileAndUploadToDB(firstIndex, lastIndex) {
    FileService.getAgents(firstIndex, lastIndex).then((agents) => {
      const agentService = typedi.Container.get(AgentService);

      agents.forEach((a) => {
        const agent = AgentService.fromCSVtoEntity(a);
        agentService.create(agent);
      });
    });
  }

  async getAll() {
    const foundagents = await AgentModel.findAll({
      order: [["id", "DESC"]],
    });

    return foundagents;
  }

  async create(agent) {
    const newAgent = {
      id: generateRandId(),
      ...agent,
    };

    const agentRecord = await AgentModel.create(newAgent);

    return agentRecord;
  }

  async update(agentId, newValues) {
    const updatedAgent = await AgentModel.update(newValues, {
      where: { id: agentId },
    });

    return updatedAgent;
  }

  async delete(agentId) {
    await AgentModel.destroy({
      where: { id: agentId },
    });
  }
}
