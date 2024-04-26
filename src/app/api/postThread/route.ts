import { postingThreadController } from "@/server-action/controllers/PostThreads.controller";
import { NextRequest, NextResponse } from "next/server";
export async function POST(res: NextResponse, req: NextRequest) {
    return await postingThreadController(req, res);
}
