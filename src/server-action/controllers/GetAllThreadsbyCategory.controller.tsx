import { NextResponse } from "next/server";
import { GetAllThreadsbyCategory } from "../services/Threads.service";

export const getAllThreadsbyCategoryController = async (category: string) => {
	try {
		const getAllbyCategory = await GetAllThreadsbyCategory({ category });
		return NextResponse.json(
			{
				success: true,
				message: "Success get all Threads by category",
				data: getAllbyCategory,
			},
			{ status: 200 }
		);
	} catch (err: any) {
		return NextResponse.json(
			{
				success: false,
				message: err.message,
			},
			{ status: 400 }
		);
	}
};
