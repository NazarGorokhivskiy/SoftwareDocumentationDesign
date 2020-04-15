import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Account = sequelize.define("account", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  company_id: { type: DataTypes.INTEGER },
  age: { type: DataTypes.INTEGER },
  health_state: { type: DataTypes.STRING },
});

export default Account;
