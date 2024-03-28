// repository/GetAllComment.repository.js

import Comments from "@/models/Comments.model";
import Threads from "@/models/Threads.model";
import Users from "@/models/Users.model";
import { GetAllCommentbyThreadId } from "../types/Comment.type";

export const GetAllComment = async ({ threadId }: GetAllCommentbyThreadId) => {
  try {
    const getAllCommentbyThreadid = await Comments.findAll({
      where: {
        threads_id: threadId,
      },
      include: [
        {
          model: Threads,
          attributes: ["thread_title"],
        },
        {
          model: Users,
          attributes: ["user_name"],
        },
      ],
    });
    return getAllCommentbyThreadid;
  } catch (err) {
    console.error("Error get all comment:", err);
    throw err;
  }
};
