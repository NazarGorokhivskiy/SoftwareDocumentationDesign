import express from "express";
import Axios from "axios";
import { promisify } from "util";

import RedisClient from "../config/redis.js";
import PrintService from "../services/print.service.js";
import { extractFilenameFromUrl, getPrintStrategy } from "../utils.js";

const router = express.Router();

const LAST_MESSAGE = "LAST_MESSAGE";
const STATUS_COMPLETED = "completed";

const redisHget = promisify(RedisClient.hget).bind(RedisClient);
const redisHset = promisify(RedisClient.hset).bind(RedisClient);
const redisLpush = promisify(RedisClient.lpush).bind(RedisClient);
const redisSet = promisify(RedisClient.set).bind(RedisClient);

router.get("/upload", async (req, res, next) => {
  try {
    const fileResponse = await Axios.get(
      "https://data.cityofnewyork.us/resource/ipu4-2q9a.json"
    );

    const uploadDate = new Date().toISOString();
    const filename = extractFilenameFromUrl(fileResponse.request.path);

    const currentStatus = await redisHget(filename, "status");

    if (currentStatus === STATUS_COMPLETED) {
      const lastUploadDate = await redisHget(filename, "uploadDate");

      redisSet(
        LAST_MESSAGE,
        `The file ${filename} has already been uploaded on ${lastUploadDate}`
      );

      return res.sendStatus(208);
    }

    redisHset(filename, "uploadDate", uploadDate);
    redisHset(filename, "status", STATUS_COMPLETED);

    // Printing file content
    const printStrategy = getPrintStrategy();
    const printService = new PrintService(printStrategy);
    const printedLines = await printService.print(fileResponse.data);

    // Saving print info to Redis
    printedLines.forEach((line) => redisLpush(`${filename}:info`, line));

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

export default router;
