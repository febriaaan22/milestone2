import Payment from "@/models/Payment.model";
import {
  Payment as inputPayment,
  checkTransactionPerDay as inputCheckTrasaction,
  updateTransaction as inputUpdateTransaction,
  getallTransaction as inputGetAllTransaction,
} from "../types/Payment.type";
export const postPayment = async ({
  billCode,
  amount,
  token,
  snapUrl,
  status,
  userId,
  appointmentId,
}: inputPayment) => {
  try {
    const transaction = await Payment.create({
      payment_code: billCode,
      payment_amount: amount,
      payment_token: token,
      payment_url: snapUrl,
      payment_status: status,
      user_id: userId,
      appointment_id: appointmentId,
    });
    return transaction;
  } catch (err) {
    console.error("Error postPayment:", err);
    throw err;
  }
};
export const checkTransactionPerDay = async ({
  orderId,
}: inputCheckTrasaction) => {
  const twentyHoursPerDay = new Date();
  twentyHoursPerDay.setHours(twentyHoursPerDay.getHours() - 24);
  let filter = {
    createdAt: {
      gte: twentyHoursPerDay,
    },
    payment_status: {
      not: {
        equals: "settlement",
      },
    },
  };
  if (typeof orderId !== "undefined") {
    filter = {
      createdAt: {
        gte: twentyHoursPerDay,
      },
      payment_status: {
        not: {
          equals: "settlement",
        },
      },
    };
    return await Payment.findAll({ where: { filter, paymentId: orderId } });
  }
  return await Payment.findAll({ where: { filter, paymentId: orderId } });
};
export const UpdateStatusTransaction = async ({
  paymentId,
  status,
}: inputUpdateTransaction) => {
  try {
    const updateStatus = await Payment.update(
      { status },
      { where: { payment_id: paymentId } }
    );
    return updateStatus;
  } catch (err) {
    console.error("Error updateStatusPayment:", err);
    throw err;
  }
};
export const allTransaction = async ({
  appointmentId,
}: inputGetAllTransaction) => {
  try {
    const getallTransaction = await Payment.findAll({
      where: { appointment_id: appointmentId },
    });
    return getallTransaction;
  } catch (err) {
    console.error("Error Get all Transaction:", err);
    throw err;
  }
};
export const checkTransactionAppointment = async ({
  appointmentId,
}: inputGetAllTransaction) => {
  try {
    const checkTransaction = await Payment.findAll({
      where: { appointment_id: appointmentId },
    });
    return checkTransaction;
  } catch (err) {
    console.error("Error check transaction:", err);
    throw err;
  }
};
