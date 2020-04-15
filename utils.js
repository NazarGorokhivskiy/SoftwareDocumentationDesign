import fs from "fs";
import readline from "readline";

export const generateRandId = () => {
  return Math.floor(Math.random() * 10e6);
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
