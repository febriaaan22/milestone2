import { DataTypes } from "sequelize";
import sequelize from "@/server-action/middlewares/dbConnection";
import Appointment from "./Appointment.model";
import Users from "./Users.model";

const Payment = sequelize.define("payment", {
  payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  payment_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  payment_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment_token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  snapUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
Payment.belongsTo(Users, {
  foreignKey: "user_name",
  targetKey: "user_name",
});
Payment.belongsTo(Appointment, {
  foreignKey: "appointment_id",
  targetKey: "appointment_id",
});
export default Payment;
