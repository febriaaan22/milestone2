import Comments from "@/models/Comments.model";
import { GetAllCommentbyThreadId } from "../types/Comment.type";
export const GetAllComment = async ({ threadId }: GetAllCommentbyThreadId) => {
    try{
      const getAllCommentbyThreadid = await Comments.findAll({
        where: {
          thread_id: threadId,
        },
      });
      return getAllCommentbyThreadid
  } catch(err){
    console.error("Error get all comment:", err);
    throw err;
  }
};
