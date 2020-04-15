import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import routes from "./routes/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());

// Main routes
app.use("/api/", routes);

app.use(express.static('views'));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is available on http://localhost:${PORT}`);
});
