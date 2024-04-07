import { NextRequest, NextResponse } from "next/server";
import { postingThread } from "../services/Threads.service";

export const postingThreadController = async (req: NextRequest) => {
	if (req.method === "POST") {
		const body = await req.json();
		try {
			const { threadTitle, category, userId, threadDesc } = body;
			const posting = await postingThread({
				threadTitle,
				category,
				userId,
				threadDesc,
			});
			return NextResponse.json({
				status: true,
				message: "Successfully Posting Thread",
				data: posting,
			});
		} catch (err: any) {
			console.error("Error Posting Thread", err);
			return NextResponse.json(
				{
					success: false,
					message: err.message,
				},
				{ status: err.status }
			);
		}
	} else {
		return NextResponse.json(
			{
				success: false,
				message: `Method ${req.method} is invalid`,
			},
			{ status: 500 }
		);
	}
};
