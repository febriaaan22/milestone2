import { NextResponse } from "next/server";
import { GetProfileData } from "../services/Profile.service";

const GetProfile = async (profileId: { slug: string; }) => {
    try {
        const profileData = await GetProfileData(Number(profileId));
        return NextResponse.json(
            {
              success: true,
              data: profileData,
            },
            { status: 200 }
          );
    } catch (error: any) {
        const status: number =
          typeof error.status === "number" ? error.status : 500;
        return NextResponse.json(
            {
              success: false,
              status: error.status,
              message: error.message,
            },
            { status }
          );
    }
}

export { 
    GetProfile
 };
