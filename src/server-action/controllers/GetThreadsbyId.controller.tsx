import { NextResponse } from "next/server";
import { GetThreadbyID } from "../services/Threads.service";

export const GetThreadsbyId = async(id: number)=>{
    try{
        const getThreadbyId = await GetThreadbyID(id);
		return NextResponse.json(
			{
				success: true,
				message: "Success get all Threads",
				data: getThreadbyId,
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
}