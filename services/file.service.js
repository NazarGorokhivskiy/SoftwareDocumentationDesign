import { readLinesFromFile } from "../utils.js";

export default class FileService {
  static async getAgents(firstIndex, lastIndex) {
    return readLinesFromFile(firstIndex, lastIndex);
  }

  static async printAgents(firstIndex, lastIndex) {
    console.log(`Insurance agents:`);
    console.log(await FileService.getAgents(firstIndex, lastIndex));
  }
}
