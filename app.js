import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes/index.js";

const inDevelopment = process.env.NODE_ENV !== "production";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is available on http://localhost:${PORT}`);
});
