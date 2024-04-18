import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import dotenv from "dotenv";
dotenv.config();
interface CustomNextRequest extends NextRequest {
  cookies: RequestCookies & { accessToken?: string };
}
export const AuthorizationAdmin = async (
  req: CustomNextRequest,
  res: NextResponse,
  next: () => void
) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  } else {
    try {
      const token = accessToken.split(" ")[1];
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error("JWT_SECRET is not defined in .env file");
      }
      const decodedToken = jwt.verify(token, secret) as JwtPayload;
      if (decodedToken.role === "admin") {
        next();
      } else {
        return NextResponse.json(
          {
            success: false,
            message: "Unauthorize",
          },
          {
            status: 401,
          }
        );
      }
    } catch (error: any) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 }
      );
    }
  }
};
