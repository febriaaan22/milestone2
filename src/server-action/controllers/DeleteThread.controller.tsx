import { NextResponse } from "next/server";
import { DeleteThread as Erase } from "../services/Threads.service";

export const DeleteThreadController = async (threadId: string) => {
	try {
		const threadIdNumber = parseInt(threadId)
		const DeleteThreads = await Erase(threadIdNumber);
		return NextResponse.json({
			success: true,
			message: "Success deleted Thread",
			data: DeleteThreads,
		});
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
