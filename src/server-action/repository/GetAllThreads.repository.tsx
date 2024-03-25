import Threads from "@/models/Threads.model";
export const GetAllThreads = async () => {
  try {
      const getAllThreads = await Threads.findAll();
      return getAllThreads;
  } catch (err) {
    console.error("Error get all Threads:", err);
    throw err;
  }
};
