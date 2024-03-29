import Threads from "@/models/Threads.model";
import Categories from "@/models/Categories.model";
import { PostThreads as inputThreads } from "../types/threads.type";

export const PostThread = async ({
  threadTitle,
  category,
  userId,
  threadDesc,
}: inputThreads) => {
  try {
    const findCategoryId = await Categories.findOne({
        where:{
            category_name: category
        },
        attributes: ["category_id"]
    })
    const categoryId = findCategoryId?.getDataValue("category_id") as number;
    const threadDate = new Date();
    const postingThread = await Threads.create({
      thread_title: threadTitle,
      category_id: categoryId,
      user_id: userId,
      thread_date: threadDate,
      thread_desc: threadDesc,
    });
    return postingThread;
  } catch (err) {
    console.error("Error posting Thread:", err);
    throw err;
  }
};
