import { getAllThreadsbyCategoryController } from '../../../../server-action/controllers/GetAllThreadsbyCategory.controller';
import { NextRequest } from 'next/server';
export async function GET(req: NextRequest, { params }: any) {
    return await getAllThreadsbyCategoryController(Number(params.slug));
}