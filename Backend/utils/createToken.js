import jwt from "jsonwebtoken";  


const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    // Set JWT as an Http-only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",  // Correct comparison
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000, // Corrected maxAge to 30 days
    });

    return token;
};

export default generateToken;