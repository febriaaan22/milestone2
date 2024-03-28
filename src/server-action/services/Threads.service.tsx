import { EditThreads } from "../repository/EditThreads.repository";
import { PostThread } from "../repository/PostThreads.repository";
import { DeleteThreads } from "../repository/DeleteThreads.repository";
import { GetAllThreads as GetAlldata } from "../repository/GetAllThreads.repository";
import { GetAllThreadsbyCategory as GetAlldatabyCategory } from "../repository/GetAllThreadsbyCategory.repository";
import {
  PostThreads as inputThreads,
  EditThreads as editing,
  DeleteThreads as deleting,
  GetAllThreadsbyCategory as inputCategoryId,
} from "../types/threads.type";
import ErrorHandler from "../utils/ErrorHandler";
const postingThread = async ({
  threadTitle,
  category,
  userId,
  threadDesc,
}: inputThreads) => {
  try {
    const Posting = await PostThread({
      threadTitle,
      category,
      userId,
      threadDesc,
    });
    return {
      status: 200,
      message: "Success Posting Thread",
      data: Posting,
    };
  } catch (error: any) {
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};
const editingThread = async ({
  threadId,
  threadTitle,
  category,
  threadDesc,
}: editing) => {
  try {
    const editing = await EditThreads({
      threadId,
      threadTitle,
      category,
      threadDesc,
    });
    return {
      status: 200,
      message: "Success Editing Thread",
      data: editing,
    };
  } catch (err: any) {
    throw new ErrorHandler({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
};
const DeleteThread = async ({ threadId }: deleting) => {
  try {
    const deleteThreads = await DeleteThreads({ threadId });
    return {
      status: 200,
      message: "Success Deleting Thread",
      data: deleteThreads,
    };
  } catch (err: any) {
    throw new ErrorHandler({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
};
const GetAllThreads = async () => {
  try {
    const getAllThreads = await GetAlldata();
    return {
      status: 200,
      message: "Success get all Threads",
      data: getAllThreads,
    };
  } catch (err: any) {
    throw new ErrorHandler({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
};
const GetAllThreadsbyCategory = async ({ category }: inputCategoryId) => {
  try {
    const getAllbyCategory = await GetAlldatabyCategory({ category });
    return {
      status: 200,
      message: "Success get all Threads by category",
      data: getAllbyCategory,
    };
  } catch (err: any) {
    throw new ErrorHandler({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
};
export {
  postingThread,
  editingThread,
  DeleteThread,
  GetAllThreads,
  GetAllThreadsbyCategory,
};
