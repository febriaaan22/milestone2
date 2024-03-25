import {
  postPayment,
  checkTransactionAppointment,
  checkTransactionPerDay,
  allTransaction,
  UpdateStatusTransaction,
} from "../repository/Payment.repository";
import {
  Payment,
  getallTransaction,
  checkTransactionPerDay as inputCekTransactionperDay,
  updateTransaction,
} from "../types/Payment.type";
import ErrorHandler from "../utils/ErrorHandler";

const PostTransaction = async ({
  billCode,
  amount,
  token,
  snapUrl,
  status,
  username,
  appointmentId,
}: Payment) => {
  try {
    const postTransaction = await postPayment({
      billCode,
      amount,
      token,
      snapUrl,
      status,
      username,
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
