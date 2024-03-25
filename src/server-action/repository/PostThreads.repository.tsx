import Threads from "@/models/Threads.model";
import Categories from "@/models/Categories.model";
import { PostThreads as inputThreads } from "../types/threads.type";

export const PostThread = async ({
  threadTitle,
  category,
  user_id,
  threadDesc,
}: inputThreads) => {
  try {
    const findCategoryId = await Categories.findOne({
        where:{
            category_name: category
        },
        attributes: ["category_id"]
    })
    const category_id = findCategoryId?.getDataValue("category_id") as number;
    const postingThread = await Threads.create({
      thread_title: threadTitle,
      category_id,
      user_id,
      thread_desc: threadDesc,
    });
    return postingThread;
  } catch (err) {
    console.error("Error posting Thread:", err);
    throw err;
  }
};
