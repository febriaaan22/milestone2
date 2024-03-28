import { Comment } from "../services/Comment.service";
import { NextRequest, NextResponse } from "next/server";
export const PostComment = async (req: NextRequest, threadId: number, userId: number) => {
  const body = await req.json();
  const { comment } = body;
  try {
    const CommentThread = await Comment({ comment, threadId, userId });
    return NextResponse.json(
      {
        success: true,
        message: "Success Comment Thread",
        data: CommentThread,
      },
      { status: 200 }
    );
  } catch (error:any) {
    return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
  }
};
