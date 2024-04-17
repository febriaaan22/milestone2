import { GetThreads } from "@/server-action/controllers/GetThreads.controller";

export async function GET() {
    return await GetThreads()
}