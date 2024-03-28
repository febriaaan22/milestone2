import Threads from "@/models/Threads.model";
import Categories from "@/models/Categories.model";
import { EditThreads as inputEditingThread } from "../types/threads.type";

export const EditThreads = async ({
  threadId,
  threadTitle,
  category,
  threadDesc,
}: inputEditingThread) => {
  try {
    const findCategoryId = await Categories.findOne({
      where: {
        category_name: category,
      },
      attributes: ["category_id"],
    });
    const categoryId = findCategoryId?.getDataValue("category_id") as number;
    const editingThread = await Threads.update(
      { thread_title: threadTitle, categoryId, thread_desc: threadDesc },
      { where: { thread_id: threadId } }
    );
    return editingThread;
  } catch (err) {
    console.error("Error editing Thread:", err);
    throw err;
  }
};
