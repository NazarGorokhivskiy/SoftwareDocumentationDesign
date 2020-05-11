import EventHubsClient from "../../config/event_hubs.js";
import { generateRandNumber } from "../../utils.js";

export default class SQSStrategy {
  print(data) {
    console.log("Printing to Event Hubs ...");

    const printedLines = [];
    const hundredsCount = Math.ceil(data.length / 100);

    let i = 1;

    const timerId = setInterval(() => {
      const maxLine = data.length > i * 100 ? i * 100 : data.length;
      const minLine = maxLine > 100 ? maxLine - 100 : 0;

      console.log(`Lines from ${minLine} to ${maxLine}`);

      const formattedData = data.slice(minLine, maxLine);

      formattedData.forEach((message) => {
        message.total_boozers = generateRandNumber();

        EventHubsClient.send(message);
      });

      printedLines.push(`Line ${minLine} - ${maxLine} was sent to Event Hubs`);

      i++;

      if (i > hundredsCount) {
        clearInterval(timerId);
        console.log("Printing finished successfully!");
      }
    }, 1000);

    return printedLines;
  }
}
