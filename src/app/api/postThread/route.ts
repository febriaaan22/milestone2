import { postingThreadController } from "@/server-action/controllers/PostThreads.controller";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
    return await postingThreadController(req, res);
}
