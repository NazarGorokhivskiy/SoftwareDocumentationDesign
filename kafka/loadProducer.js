import kafka from "kafka-node";

import KafkaStrategy from "../services/print_strategies/KafkaStrategy.js";
import config from "../config/kafka.js";

export default () => {
  const kafkaTopic = config.kafka_topic;

  try {
    const client = new kafka.KafkaClient(config.kafka_server);
    const producer = new kafka.Producer(client);

    producer.on("ready", async function () {
      console.log("Kafka Producer is ready");

      KafkaStrategy.kafkaProducer = producer;
    });

    producer.on("error", function (err) {
      console.log(`[kafka-producer -> ${kafkaTopic}]: connection error`);

      throw err;
    });
  } catch (e) {
    console.log(e);
  }
};
