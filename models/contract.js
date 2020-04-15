import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Contract = sequelize.define("contract", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  date: { type: DataTypes.DATE },
  description: { type: DataTypes.TEXT },
  account_id: { type: DataTypes.INTEGER },
  insurance_agent_id: { type: DataTypes.INTEGER },
});

export default Contract;
