import Users from "@/models/Users.model";

export const getUserProfile = async (userId: number) => {
	const profile = await Users.findOne({
		where: { user_id: userId },
	});

	return profile;
};