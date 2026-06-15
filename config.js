import dotenv from "dotenv";

dotenv.config();

export const config = {
    JWT: {
        secret: process.env.JWT_Secret_Key
    },
    email:{
        user_email: process.env.user_email,
        password_email: process.env.password_email
    },
    cloudinary:{
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLODUNARY_API_SECRET
    }
}