import { DeleteThreadController } from "@/server-action/controllers/DeleteThread.controller";

export async function DELETE( { params }: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return await DeleteThreadController(params);
}