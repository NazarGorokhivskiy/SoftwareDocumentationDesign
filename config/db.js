import Sequelize from "sequelize";
import { DB } from "./config.js";

export const sequelize = new Sequelize(DB.DB_NAME, DB.USERNAME, DB.PASSWORD, {
  host: DB.HOST,
  dialect: "mssql",
  define: {
    timestamps: false,
  },
});

