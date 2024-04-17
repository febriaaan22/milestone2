import { PutComment } from "@/server-action/controllers/PutComment.controller";
import { NextRequest } from "next/server";
export async function PUT(req: NextRequest, { params }: any) {
  return await PutComment(req, Number(params.slug));
}
