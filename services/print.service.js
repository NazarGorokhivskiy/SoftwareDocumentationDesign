export default class PrintService {
  constructor(printStrategy) {
    this.printStrategy = printStrategy;
  }

  changeStrategy(printStrategy) {
    this.printStrategy = printStrategy;
  }

  async print(fileContent) {
    if (!this.printStrategy) {
      throw new Error("printStrategy in not defined!");
    }

    this.printStrategy.print(fileContent);
  }
}
