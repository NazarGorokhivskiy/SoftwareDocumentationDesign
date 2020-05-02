import express from "express";

import agentRoute from "./insurance_agent.route.js";
import accountRoute from "./account.route.js";
import contractRoute from "./contract.route.js";
import companyRoute from "./company.route.js";
import cityDataRoute from "./city_data.route.js";
import testRoute from "./test.route.js";

const router = express.Router();

router.use("/agent", agentRoute);
router.use("/account", accountRoute);
router.use("/contract", contractRoute);
router.use("/company", companyRoute);
router.use("/city_data", cityDataRoute);

router.use("/test", testRoute);

export default router;
