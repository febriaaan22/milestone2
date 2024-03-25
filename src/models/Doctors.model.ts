import { DataTypes } from "sequelize";
import sequelize from "@/server-action/middlewares/dbConnection";
import Users from "./Users.model";

const Doctors = sequelize.define("Doctors",{
    doctor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    doctor_spec: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    doctor_strNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    doctor_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
    },
});

Doctors.belongsTo(Users,{
    foreignKey: "user_id",
    targetKey: "user_id",
});
export default Doctors;