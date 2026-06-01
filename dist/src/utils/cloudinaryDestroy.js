import cloudinary from "../config/cloudinary.js";
export const deleteFromCloudinary = async (publicId) => {
    await cloudinary.uploader.destroy(publicId, {
        resource_type: "image",
    });
};
//# sourceMappingURL=cloudinaryDestroy.js.map