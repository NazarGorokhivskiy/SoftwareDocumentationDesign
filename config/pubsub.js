import googleCloud from "@google-cloud/pubsub";

const TOPIC_NAME = process.env.GCP_PUB_SUB_TOPIC;
const PUBSUB_VERIFICATION_TOKEN = process.env.PUBSUB_VERIFICATION_TOKEN;

const pubsub = new googleCloud.PubSub({
  projectId: process.env.GCP_PROJECT_ID,
});

// Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
const data = Buffer.from(JSON.stringify({ foo: "bar" }));

const PubSubTopicClient = pubsub.topic(TOPIC_NAME);

// const messageId = await pubsub.topic(TOPIC_NAME).publish(data);

export default PubSubTopicClient;
