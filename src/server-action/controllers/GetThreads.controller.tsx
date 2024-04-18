import { NextRequest, NextResponse } from "next/server";
import { GetAllThreads } from "../services/Threads.service";

export const GetThreads = async (req: NextRequest, res: NextResponse) => {
	try {
		const getAllThread = await GetAllThreads();
		return NextResponse.json(
			{
				success: true,
				message: "Success get all Threads",
				data: getAllThread,
			},
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{
				success: false,
				message: error.message,
			},
			{ status: 400 }
		);
	}
};
