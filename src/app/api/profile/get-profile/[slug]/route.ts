/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { GetProfile } from "@/server-action/controllers/Profile.controller";

export async function GET(_request: any, { params }: any) {
  return await GetProfile(params.slug);
}
