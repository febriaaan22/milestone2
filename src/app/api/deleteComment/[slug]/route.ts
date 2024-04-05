import { DeleteComment } from "@/server-action/controllers/DeleteComment.controller";

export async function DELETE(request: any, { params }: any) {
  return await DeleteComment(Number(params.slug));
}
