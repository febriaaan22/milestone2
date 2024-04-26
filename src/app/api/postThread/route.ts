import { postingThreadController } from "@/server-action/controllers/PostThreads.controller";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest) {
    return await postingThreadController(req);
}