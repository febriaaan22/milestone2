import { GetProfile } from "@/server-action/controllers/Profile.controller";

export async function GET(_request: any, { params }: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return await GetProfile(params.slug);
}