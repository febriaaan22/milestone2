import Threads from "@/models/Threads.model";
import Users from "@/models/Users.model";
export const GetAllThreads = async () => {
  try {
    const getAllThreads = await Threads.findAll({
      include: [{ model: Users, attributes: ["user_name"], as: "user" }],
    });
    return getAllThreads;
  } catch (err) {
    console.error("Error get all Threads:", err);
    throw err;
  }
};
