import kafka from "kafka-node";
import config from "../config/kafka.js";

const kafkaTopic = config.kafka_topic;

const sendCallback = (err, data) => {
  if (err) {
    console.log(err);

    return console.log(
      `[kafka-producer -> ${kafkaTopic}]: broker update failed`
    );
  }
};

try {
  const client = new kafka.KafkaClient(config.kafka_server);
  const producer = new kafka.Producer(client);

  const payloads = [
    {
      topic: config.kafka_topic,
      messages: "Jmmm",
    },
  ];

  producer.on("ready", async function () {
    console.log("Kafka Producer is ready");
    producer.send(payloads, sendCallback);
  });

  producer.on("error", function (err) {
    console.log(`[kafka-producer -> ${kafkaTopic}]: connection error`);

    throw err;
  });
} catch (e) {
  console.log(e);
}
