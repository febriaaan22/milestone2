import { GetComment } from "@/server-action/controllers/GetComment.controller";
// import { NextRequest } from "next/server";
export async function GET(request: any, { params }: any) {
  return await GetComment(Number(params.slug));
}
