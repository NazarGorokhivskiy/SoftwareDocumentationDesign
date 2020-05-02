import kafka from "kafka-node";
import config from "../config/kafka.js";

try {
  const client = new kafka.KafkaClient(config.kafka_server);

  const consumer = new kafka.Consumer(
    client,
    [{ topic: config.kafka_topic, partition: 0 }],
    {
      autoCommit: true,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
      encoding: "utf8",
      fromOffset: false,
    }
  );

  consumer.on("message", async function (message) {
    console.log("kafka-> ", message.value);
  });

  consumer.on("error", function (err) {
    console.log("error", err);
  });
} catch (e) {
  console.log(e);
}
