import Comments from "@/models/Comments.model";
import { EditComment as inputEditingComment } from "../types/Comment.type";
export const EditComment = async ({
  comment,
  commentId,
}: inputEditingComment) => {
  try {
    const editingComment = await Comments.update(
      { comment_post: comment },
      { where: { comment_id: commentId } }
    );
    return editingComment;
  } catch (err) {
    console.error("Error editing Comment:", err);
    throw err;
  }
};
