import { Payment } from "@/server-action/controllers/Payment.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  return await Payment(req, res);
}
