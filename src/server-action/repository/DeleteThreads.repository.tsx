import Threads from "@/models/Threads.model";
import { DeleteThreads as inputThreads } from "../types/threads.type";
export const DeleteThreads = async ({ threadId }: inputThreads) => {
  try {
    const deleteThreads = await Threads.destroy({
      where: { thread_id: threadId },
    });
    return deleteThreads;
  } catch (err) {
    console.error("Error deleting Thread:", err);
    throw err;
  }
};
