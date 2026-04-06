import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        // Getting token from headers
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: "Not Authorized Login Again" });
        }

        // Decoding the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Verification check: Comparing decoded token with admin email + password string
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized Login Again" });
        }

        // If verification is successful, proceed to the controller function
        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default adminAuth;