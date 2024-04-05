import { GetAllComment } from "../services/Comment.service";
import { NextResponse } from "next/server";
export const GetComment = async (threadId: number) => {
  try {
    const getAllCommentThread = await GetAllComment({ threadId });
    return NextResponse.json(
      {
        success: true,
        message: "Success get all Comments",
        data: getAllCommentThread,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    );
  }
};
