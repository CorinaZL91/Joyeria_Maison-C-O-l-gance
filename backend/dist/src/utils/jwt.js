import jwt from "jsonwebtoken";
export const generateToken = (payload) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET no está definido en las variables de entorno");
    }
    return jwt.sign(payload, secret, { expiresIn: "1d" });
};
export const verifyToken = (token) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET no está definido en las variables de entorno");
    }
    return jwt.verify(token, secret);
};
//# sourceMappingURL=jwt.js.map