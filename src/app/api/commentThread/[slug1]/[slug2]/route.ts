import { PostComment } from "@/server-action/controllers/PostComment.controller";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest, { params }: any) {
    return await PostComment(req,Number(params.slug1), Number(params.slug2));
  }
  