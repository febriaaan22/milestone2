import Threads from "@/models/Threads.model";
import Users from "@/models/Users.model";
export const GetThreadsbyId = async (id: number) => {
  try {
    const getThread = await Threads.findOne({
      where: { thread_id: id },
      include: [{ model: Users, attributes: ["user_name"], as: "user" }],
    });
    return getThread;
  } catch (err) {
    console.error("Error get all Threads:", err);
    throw err;
  }
};
