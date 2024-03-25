import { DataTypes } from "sequelize";
import sequelize from "@/server-action/middlewares/dbConnection";
import Appointment from "./Appointment.model";
const Consult = sequelize.define("consult",{
    consult_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    consult_post: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    appointment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
Consult.belongsTo(Appointment,{
    foreignKey: "appointment_id",
    targetKey: "appointment_id"
});
export default Consult;