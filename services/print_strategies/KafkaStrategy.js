import config from "../../config/kafka.js";

const sendCallback = (err, data) => {
  if (err) {
    console.log(err);

    return console.log(`KafkaStrategy: broker update failed`);
  }
};

export default class KafkaStrategy {
  static kafkaProducer = null;

  print(arr) {
    if (!KafkaStrategy.kafkaProducer) {
      throw new Error("kafkaProducer should be configured");
    }

    const payloads = arr.map((data) => ({
      topic: config.kafka_topic,
      messages: data,
    }));

    KafkaStrategy.kafkaProducer.send(payloads, sendCallback);
  }
}
