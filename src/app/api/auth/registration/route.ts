import { RegisterController } from "@/server-action/controllers/Auth.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  return await RegisterController(req, res);
}
