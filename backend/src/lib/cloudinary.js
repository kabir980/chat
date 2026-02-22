import { v2 as coudinary } from "cloudinary";
import { ENV } from "./env.js";

coudinary.config({
  cloud_name: ENV.CLOUDINARY_CLOUD_NAME,
  api_key: ENV.CLOUDINARY_API_KEY,
  api_secret: ENV.CLOUDINARY_API_SECRET,
});

export default coudinary;
