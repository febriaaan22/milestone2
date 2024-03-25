import { DataTypes } from "sequelize";
import sequelize from "@/server-action/middlewares/dbConnection";
import Users from "./Users.model";
import Doctors from "./Doctors.model";

const Appointment = sequelize.define("appointment",{
    appointment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    appointment_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    appointment_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    docter_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    appointment_desc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});
Appointment.belongsTo(Users,{
    foreignKey: "user_id",
    targetKey: "user_id",
});
Appointment.belongsTo(Doctors,{
    foreignKey: "doctor_id",
    targetKey: "doctor_id",
});
export default Appointment;