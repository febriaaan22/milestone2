import Appointment from "@/models/Appointment.model";
import {
  postPayment,
  checkTransactionAppointment,
  checkTransactionPerDay,
  allTransaction,
  UpdateStatusTransaction,
} from "../repository/Payment.repository";
import {
  PostPayment,
  getallTransaction,
  checkTransactionPerDay as inputCekTransactionperDay,
  updateTransaction,
} from "../types/Payment.type";
import ErrorHandler from "../utils/ErrorHandler";
import { MidtransClient } from "midtrans-node-client";
import Users from "@/models/Users.model";
const PostTransaction = async ({ userId, appointmentId }: PostPayment) => {
  try {
    const snap = new MidtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-d_b3QXxN4pBZ55bqK07ezRiN",
      clientKey: "SB-Mid-client-5SxL1SuT1_hDKrLQ",
    });
    const findtitleAppointment = await Appointment.findOne({
      where: { appointment_id: appointmentId },
      attributes: ["appointment_title"],
    });
    const appointmentTitle = findtitleAppointment?.getDataValue(
      "appointment_title"
    ) as string;

    const findemailuser = await Users.findOne({
      where: { user_id: userId },
      attributes: ["user_email"],
    });
    const userEmail = findemailuser?.getDataValue("user_email") as string;
    const randomCode = Math.floor(new Date().getTime() / 1000);
    const billCode = `ORDER-ID-${randomCode}`;
    const amount = 50000;
    const parameters = {
      transaction_details: {
        order_id: billCode,
        gross_amount: amount,
      },
      item_details: {
        id: billCode,
        name: appointmentTitle,
        quantity: 1,
        price: amount,
      },
      costumer_details: {
        email: userEmail,
      },
    };
    const token = await snap.createTransactionToken(parameters);
    // console.log(token);
    const snapUrl = await snap.createTransactionRedirectUrl(parameters);
    // console.log(snapUrl);
    const status = "Pending";
    const postTransaction = await postPayment({
      billCode,
      amount,
      token,
      status,
      snapUrl,
      userId,
      appointmentId,
    });
    return {
      status: 200,
      message: "Success Posted transaction",
      data: postTransaction,
    };
  } catch (error: any) {
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

const UpdateStatus = async ({ paymentId, status }: updateTransaction) => {
  try {
    const updateStatus = await UpdateStatusTransaction({ paymentId, status });
    return {
      status: 200,
      message: "Success Update Status Transaction",
      data: updateStatus,
    };
  } catch (error: any) {
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};
const checkTransactionperDay = async ({
  orderId,
}: inputCekTransactionperDay) => {
  try {
    const checkTransaction = await checkTransactionPerDay({ orderId });
    return {
      status: 200,
      message: "Success Checking transaction per Day",
      data: checkTransaction,
    };
  } catch (error: any) {
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};
const checktransactionappointment = async ({
  appointmentId,
}: getallTransaction) => {
  try {
    const checkTransactionappointment = await checkTransactionAppointment({
      appointmentId,
    });
    return {
      status: 200,
      message: "Success Checking Transaction Appointment",
      data: checkTransactionappointment,
    };
  } catch (error: any) {
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};
const AllTransaction = async ({ appointmentId }: getallTransaction) => {
  try {
    const getAllTransaction = await allTransaction({ appointmentId });
    return {
      status: 200,
      message: "Success get All Transactions",
      data: getAllTransaction,
    };
  } catch (error: any) {
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};
export {
  PostTransaction,
  UpdateStatus,
  checkTransactionperDay,
  checktransactionappointment,
  AllTransaction,
};
