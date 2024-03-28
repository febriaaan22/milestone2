import { NextResponse, NextRequest } from "next/server";
import { postingThread } from "../services/Threads.service";
// import { PostThreads as inputThread } from "../types/threads.type";
import Threads from "@/models/Threads.model";
export const PostThread = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  const { threadTitle, category, userId, threadDesc } = body;
  try {
    const checkTitleThread = await Threads.findOne({
      where: { thread_title: threadTitle },
    });
    if (checkTitleThread) {
      return NextResponse.json(
        {
          success: false,
          message: "Title Thread already Posted",
          data: checkTitleThread,
        },
        { status: 400 }
      );
    } else {
      const posting = await postingThread({
        threadTitle,
        category,
        userId,
        threadDesc,
      });
      return NextResponse.json(
        {
          success: true,
          message: "Success Posting Thread",
          data: posting,
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error("Error Add gift:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    );
  }
};
