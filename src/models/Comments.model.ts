import { DataTypes } from "sequelize";
import sequelize from "@/server-action/middlewares/dbConnection";
import Threads from "./Threads.model";
import Users from "./Users.model";

const Comments = sequelize.define("comments", {
  comment_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  comment_post: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  threads_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});
Comments.belongsTo(Threads,{
    foreignKey: "threads_id",
    targetKey: "thread_id",
});
Comments.belongsTo(Users,{
    foreignKey: "user_id",
    targetKey: "user_id",
});
export default Comments;
