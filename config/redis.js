import redis from "redis";

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASS,
});

client.on("error", (err) => {
  console.error("Redis Error:");
  console.error(err);
});

export default client;
