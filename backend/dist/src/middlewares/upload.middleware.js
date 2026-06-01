import multer from "multer";
const storage = multer.memoryStorage();
const fileFilter = (_req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new Error("Solo se permiten imágenes JPG, PNG o WEBP"));
    }
};
export const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter,
});
//# sourceMappingURL=upload.middleware.js.map