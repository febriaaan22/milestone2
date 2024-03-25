import Users from "@/models/Users.model";
import ErrorHandler from "../utils/ErrorHandler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { RegisterInput, LoginInput } from "../types/Auth.type";
import { getUserAccount, getUserEmail } from "../repository/Auth.repository";

const registerService = async ({
	user_email,
	user_name,
	user_pass,
}: RegisterInput) => {
	try {
		const existEmail = await getUserEmail(user_email);
		if (existEmail) {
			throw new ErrorHandler({
				success: false,
				status: 409,
				message:
					"The provided email is already registered. Please use a different email address.",
			});
		}
		const hashedPassword = await bcrypt.hash(user_pass, 10);
		const newUser = await Users.create({
			user_email,
			user_name,
			user_pass: hashedPassword,
		});
		return {
			status: 200,
			message: "registration successful",
			data: newUser,
		};
	} catch (error: any) {
		throw new ErrorHandler({
			success: false,
			status: error.status,
			message: error.message,
		});
	}
};

const loginService = async ({ user_email, user_pass }: LoginInput) => {
	console.log(user_email, user_pass);
	try {
		const user = await getUserAccount(user_email);
		console.log(user?.dataValues.user_pass);
		const JWT_SIGN = "310324";

		if (user) {
			const isPasswordCorrect: boolean = await bcrypt.compare(
				user_pass,
				user?.dataValues.user_pass
			);

			if (isPasswordCorrect) {
				const accessToken: string = jwt.sign(
					{
						username: user.dataValues.user_name,
						role: user.dataValues.user_role,
					},
					JWT_SIGN,
					{ expiresIn: "1hr" }
				);

				const refreshToken: string = jwt.sign(
					{
						username: user.dataValues.user_name,
						role: user.dataValues.user_role,
					},
					JWT_SIGN,
					{ expiresIn: "7d" }
				);

				return {
					status: 200,
					message: "login successful",
					data: user,
					accessToken,
					refreshToken,
				};
			} else {
				return {
					status: 401,
					message: "Password is incorrect",
				};
			}
		} else {
			return {
				status: 401,
				message: "User Not Found",
			};
		}
	} catch (error: any) {
		throw new ErrorHandler({
			success: false,
			status: error.status || 500,
			message: error.message || "Internal Server Error",
		});
	}
};

export { registerService, loginService };
