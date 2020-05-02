import hubs from "@azure/event-hubs";
const { EventHubClient } = hubs;

const connectionString = process.env.EVENT_HUBS_URL;
const client = EventHubClient.createFromConnectionString(connectionString);

export default client;
