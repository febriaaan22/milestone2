import Threads from "@/models/Threads.model";
import Categories from "@/models/Categories.model";
import { GetAllThreadsbyCategory as inputCategoryId } from "../types/threads.type";
import Users from "@/models/Users.model";

export const GetAllThreadsbyCategory = async ({
  category,
}: inputCategoryId) => {
  try {
    const findCategoryId = await Categories.findOne({
      where: {
        category_id: category,
      },
      attributes: ["category_id"],
    });
    const categoryId = findCategoryId?.getDataValue("category_id") as number;
    const getAllbyCategory = await Threads.findAll({
      where: {
        category_id: categoryId,
      },
      include: [
        {
          model: Users,
          attributes: ["user_name"],
          as: "user",
        },
      ],
    });
    return getAllbyCategory;
  } catch (err) {
    console.error("Error get all Thread by category:", err);
    throw err;
  }
};
