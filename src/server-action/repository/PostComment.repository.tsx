import Comments from "@/models/Comments.model";
import { PostComment as inputComment } from "../types/Comment.type";
export const PostComment = async ({ comment, threadId, userId }: inputComment) => {
  try {
    const CommentThread = await Comments.create({
      comment_post: comment,
      thread_id: threadId,
      user_id: userId,
    });
    return CommentThread;
  } catch (err) {
    console.error("Error comment Thread:", err);
    throw err;
  }
};
