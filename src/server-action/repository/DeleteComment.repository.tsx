import Comments from "@/models/Comments.model";
import { DeleteComment as inputDeleteCommment } from "../types/Comment.type";
export const DeleteComment = async ({ commentId }: inputDeleteCommment) => {
  try {
    const DeletingComment = await Comments.destroy({
      where: {
        comment_id: commentId,
      },
    });
    return DeletingComment;
  } catch (err) {
    console.error("Error deleting Comment:", err);
    throw err;
  }
};
