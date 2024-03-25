import { Sequelize } from "sequelize";
const DB_URL = "postgres://postgres.jptzyotwsjhmphakryap:Genierevounext@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"

const sequelize = new Sequelize(DB_URL, {
    dialect: "postgres",
    dialectModule: require("pg"),
    logging: false,
  });
  
  
  export default sequelize;