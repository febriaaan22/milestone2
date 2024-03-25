import Users from "@/models/Users.model";
import { Model } from "sequelize";

export const getUserEmail = async (user_email: string) => {
	const existEmail = await Users.findOne({
		where: { user_email },
	});

	return existEmail;
};

interface UserAttributes {
	user_email: string;
	user_name: string;
	user_pass: string;
	user_role: string;
}

export const getUserAccount = async (
	inputEmail: string
): Promise<Model<UserAttributes, any> | null> => {
	const user = await Users.findOne({ where: { user_email: inputEmail } });
	return user;
};
