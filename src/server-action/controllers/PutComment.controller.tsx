import { EditComment } from "../services/Comment.service";
import { NextRequest, NextResponse } from "next/server";
export const PutComment = async (req: NextRequest, commentId: number) => {
  const body = await req.json();
  const { comment } = body;
  try {
    const editCommentThread = await EditComment({ comment, commentId });
    return NextResponse.json(
      {
        success: true,
        message: "Success edited Comment Thread",
        data: editCommentThread,
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
