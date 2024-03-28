import Comments from "@/models/Comments.model";
import { PostComment as inputComment } from "../types/Comment.type";
export const PostComment = async ({ comment, threadId, userId }: inputComment) => {
  try {
    const commentDate = new Date();
    const CommentThread = await Comments.create({
      comment_post: comment,
      threads_id: threadId,
      user_id: userId,
      comment_date: commentDate
    });
    return CommentThread;
  } catch (err) {
    console.error("Error comment Thread:", err);
    throw err;
  }
};
