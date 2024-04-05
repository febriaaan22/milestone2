import { NextResponse } from "next/server";
import { DeleteThread as Erase } from "../services/Threads.service";

export const DeleteThreadController = async (threadId: number) => {
	try {
		const DeleteThreads = await Erase({ threadId });
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
