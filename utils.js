import fs from "fs";
import readline from "readline";
import ConsoleStrategy from "./services/print_strategies/ConsoleStrategy.js";
import SQSStrategy from "./services/print_strategies/SQSStrategy.js";

export const generateRandId = () => {
  return Math.floor(Math.random() * 10e6);
};

export const generateRandNumber = () => {
  return Math.floor(Math.random() * 100);
};

export const readLinesFromFile = (startLine, endLine) =>
  new Promise((resolve, reject) => {
    try {
      if (!endLine) {
        endLine = startLine;
        startLine = 0;
      }

      const agents = [];

      const lineReader = readline.createInterface({
        input: fs.createReadStream("./files/agents.csv"),
      });

      let i = 0;
      lineReader.on("line", (line) => {
        i++;

        if (i >= startLine) {
          agents.push(line);
        }

        if (i >= endLine) {
          lineReader.removeAllListeners();
          lineReader.close();
          resolve(agents);
        }
      });
    } catch (error) {
      reject(error);
    }
  });

export const extractFilenameFromUrl = (string) => {
  return string.substr(string.lastIndexOf("/") + 1);
};

export const getPrintStrategy = () => {
  const evnStrategy = process.env.PRINT_STRATEGY;

  switch (evnStrategy) {
    case "CONSOLE":
      return new ConsoleStrategy();
    case "MESSAGING_SERVICE":
      return new SQSStrategy();
    default:
      return null;
  }
};
