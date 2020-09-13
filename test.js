import EventHubsClient from "./config/event_hubs.js";

setInterval(function () {
  const device = "dev" + String(Math.floor(Math.random() * 10 + 1));
  const reading = String(Math.random());

  console.log(device + ": " + reading);

  const message = { device, reading };

  EventHubsClient.send({ body: message });
}, 1000);
