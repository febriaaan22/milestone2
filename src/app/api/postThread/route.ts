import { PostThread } from "@/server-action/controllers/PostThread.controller";
import { NextResponse, NextRequest } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
    return await PostThread(req, res);
  }
  