import { DataTypes } from "sequelize";
import sequelize from "@/server-action/middlewares/dbConnection";
import Categories from "./Categories.model";
import Users from "./Users.model";

const Threads = sequelize.define("threads",{
    thread_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    thread_title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    thread_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    thread_desc: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

Threads.belongsTo(Categories,{
    foreignKey: "category_id",
    targetKey: "category_id"
});
Threads.belongsTo(Users,{
    foreignKey: "user_id",
    targetKey: "user_id",
});
export default Threads;