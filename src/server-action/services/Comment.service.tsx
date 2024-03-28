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
import Users from "@/models/Users.model";
import Threads from "@/models/Threads.model";
import Comments from "@/models/Comments.model";
const Comment = async ({ comment, threadId, userId }: inputComment) => {
  try {
    const findUsername = await Users.findOne({
      where: { user_id: userId },
      attributes: ["user_name"],
    });
    const username = findUsername?.getDataValue("user_name") as string;
    const findThread = await Threads.findOne({
      where: { thread_id: threadId },
      attributes: ["thread_title"],
    });
    const threadTitle = findThread?.getDataValue("thread_title") as string;
    const CommentThread = await PostComment({ comment, threadId, userId });
    return {
      status: 200,
      message: "Success Comment Thread",
      data: {
        titleThread: threadTitle,
        comment: CommentThread,
        commentator: username,
      },
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
    const newComment = await Comments.findOne({
      where: { comment_id: commentId },
    });
    return {
      status: 200,
      message: "Success Edited Comment",
      data: { count: editComment, comment: newComment },
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
