import { editingThreadController } from "@/server-action/controllers/PutThreads.controller";
import { NextRequest } from "next/server";
export async function PUT(req: NextRequest) {
  return await editingThreadController(req);
}