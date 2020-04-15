import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Company = sequelize.define("company", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING },
  is_partner: { type: DataTypes.BOOLEAN },
  location: { type: DataTypes.STRING },
});

export default Company;
