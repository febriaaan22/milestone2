import { PostComment } from "../repository/PostComment.repository";
import { GetAllComment as GetallData } from "../repository/GetAllComment.repository";
import { EditComment as Editing } from "../repository/EditComment.repository";
import { DeleteComment as deletingComment } from "../repository/DeleteComment.repository";
import {
  PostComment as inputComment,
  GetAllCommentbyThreadId as getcomment,
  EditComment as inputEditingComment,
  DeleteComment as inputDeleteComment,
} from "../types/Comment.type";
import ErrorHandler from "../utils/ErrorHandler";
const Comment = async ({ comment, threadId, userId }: inputComment) => {
  try {
    const CommentThread = await PostComment({ comment, threadId, userId });
    return {
      status: 200,
      message: "Success Comment Thread",
      data: CommentThread,
    };
  } catch (err: any) {
    throw new ErrorHandler({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
};
const GetAllComment = async ({ threadId }: getcomment) => {
  try {
    const getAllComment = await GetallData({ threadId });
    return {
      status: 200,
      message: "Success get all comment",
      data: getAllComment,
    };
  } catch (err: any) {
    throw new ErrorHandler({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
};
const EditComment = async ({ comment, commentId }: inputEditingComment) => {
  try {
    const editComment = await Editing({ comment, commentId });
    return {
      status: 200,
      message: "Success Edited Comment",
      data: editComment,
    };
  } catch (err: any) {
    throw new ErrorHandler({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
};
const DeleteComment = async ({ commentId }: inputDeleteComment) => {
  try {
    const DeletingComment = await deletingComment({ commentId });
    return {
      status: 200,
      message: "Success Deleted Comment",
      data: DeletingComment,
    };
  } catch (err: any) {
    throw new ErrorHandler({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
};
export { Comment, GetAllComment, EditComment, DeleteComment };
