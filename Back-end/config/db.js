import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Pratham-gup:pratham1214@cluster0.bu9rdcu.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB connected"));
};
