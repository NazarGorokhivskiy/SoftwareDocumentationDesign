import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const InsuranceAgent = sequelize.define("insurance_agent", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  position: { type: DataTypes.STRING },
  start_date: { type: DataTypes.DATE },
  email: { type: DataTypes.STRING },
});

export default InsuranceAgent;
