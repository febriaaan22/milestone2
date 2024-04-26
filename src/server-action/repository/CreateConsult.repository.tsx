import Consult from "@/models/Consult.model";
import { CreateConsult as inputCreateConsult } from "../types/Consult.type";
export const CreateConsult = async ({
	consultPost,
	appointmentId,
}: inputCreateConsult) => {
	try {
		const CreatingConsult = await Consult.create({
			consult_post: consultPost,
			appointment_id: appointmentId,
		});
		return CreatingConsult;
	} catch (err) {
		console.error("Error create consult:", err);
		throw err;
	}
};
