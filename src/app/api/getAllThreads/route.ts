import { GetThreads } from "@/server-action/controllers/GetThreads.controller";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
    return await GetThreads(req, res)
}