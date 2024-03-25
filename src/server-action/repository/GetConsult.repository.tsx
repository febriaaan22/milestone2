import Consult from "@/models/Consult.model";
import { GetConsult as inputGetConsult } from "../types/Consult.type";
export const GetConsult = async ({ appointmentId }: inputGetConsult) => {
  try {
    const GetAllConsult = await Consult.findAll({
      where: {
        appointment_id: appointmentId,
      },
    });
    return GetAllConsult;
  } catch (err) {
    console.error("Error get all Consult:", err);
    throw err;
  }
};
