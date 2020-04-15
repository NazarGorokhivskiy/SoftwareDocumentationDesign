import express from "express";

import agentRoute from "./insurance_agent.route.js";
import accountRoute from "./account.route.js";
import contractRoute from "./contract.route.js";
import companyRoute from "./company.route.js";

const router = express.Router();

router.use("/agent", agentRoute);
router.use("/account", accountRoute);
router.use("/contract", contractRoute);
router.use("/company", companyRoute);

export default router;
