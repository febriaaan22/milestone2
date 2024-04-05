import { NextResponse } from "next/server";
import { DeleteComment as Deleting } from "../services/Comment.service";
export const DeleteComment = async (commentId: number) => {
  try {
    const deleteCommentThread = await Deleting({ commentId });
    return NextResponse.json({
        success: true,
        message: "Success deleted Comment Thread",
        data: deleteCommentThread
    })
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
