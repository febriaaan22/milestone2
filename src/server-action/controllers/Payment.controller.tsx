import { NextRequest, NextResponse } from "next/server";
import { PostTransaction } from "../services/Payment.service";

export const Payment = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { userId, appointmentId } = body;
    const transaction = await PostTransaction({ userId, appointmentId });
    return NextResponse.json(
      {
        success: true,
        message: "Success Post transaction",
        data: transaction,
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
