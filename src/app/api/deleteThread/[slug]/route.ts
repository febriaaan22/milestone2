import { DeleteThreadController } from "@/server-action/controllers/DeleteThread.controller";
import { NextRequest } from "next/server";

export async function DELETE( req: NextRequest, { params }: any) {
  return await DeleteThreadController(Number(params.slug));
}