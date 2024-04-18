import { DataTypes } from "sequelize";
import sequelize from "@/server-action/middlewares/dbConnection";
import Appointment from "./Appointment.model";
import Users from "./Users.model";

const Payment = sequelize.define("payments", {
  payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  payment_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment_token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  payment_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
Payment.belongsTo(Users, {
  foreignKey: "user_id",
  targetKey: "user_id",
});
Payment.belongsTo(Appointment, {
  foreignKey: "appointment_id",
  targetKey: "appointment_id",
});
export default Payment;
