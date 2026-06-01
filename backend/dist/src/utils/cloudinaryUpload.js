import { Readable } from "stream";
import cloudinary from "../config/cloudinary.js";
export const uploadBufferToCloudinary = (fileBuffer, folder = "joyeria/productos") => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({
            folder,
            resource_type: "image",
        }, (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            if (!result) {
                reject(new Error("No se recibió respuesta de Cloudinary"));
                return;
            }
            resolve({
                secure_url: result.secure_url,
                public_id: result.public_id,
            });
        });
        Readable.from(fileBuffer).pipe(uploadStream);
    });
};
//# sourceMappingURL=cloudinaryUpload.js.map