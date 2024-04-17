import { NextResponse, NextRequest } from "next/server";
import { editingThread } from "../services/Threads.service";

export const editingThreadController = async (
	req: NextRequest,
	res: NextResponse
) => {
	if (req.method === "PUT") {
		const body = await req.json();
		try {
			const { threadId, threadTitle, category, threadDesc } = body;
			const editing = await editingThread({
				threadId,
				threadTitle,
				category,
				threadDesc,
			});
			return NextResponse.json({
				status: true,
				message: "Successfully Editing Thread",
				data: editing,
			});
		} catch (err: any) {
			console.error("Error Editing Thread", err);
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
