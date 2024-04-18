import { GetThreadsbyId } from '@/server-action/controllers/GetThreadsbyId.controller';
import { NextRequest } from 'next/server';
export async function GET(req: NextRequest, { params }: any) {
    return await GetThreadsbyId(Number(params.id));
}