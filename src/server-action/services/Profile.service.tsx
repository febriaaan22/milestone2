import { getUserProfile } from "../repository/GetUserProfile.repository";
import ErrorHandler from "../utils/ErrorHandler";

const GetProfileData = async (userId: number) => {
    try {
      const getAllComment = await getUserProfile(userId);
      return {
        status: 200,
        message: "Success Profile Info",
        data: getAllComment,
      };
    } catch (err: any) {
      throw new ErrorHandler({
        success: false,
        status: err.status,
        message: err.message,
      });
    }
};

export { 
    GetProfileData
}
