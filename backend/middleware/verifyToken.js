import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    // 1. Get the token from the header
    const authHeader = req.headers["authorization"];

    const pureToken = authHeader.split(" ")[1];

    if (!pureToken) {
        return res.status(401).json({
            message: "Token not found"
        })
    }

    // 2. Check if token is valid or not
    jwt.verify(pureToken, "this_is_private_key", function (err, decoded) {
        if (err) {
            return res.status(401).json({
                message: "Token invalid"
            })
        }
        console.log(decoded, "This is decoded");

        // 3. If token is valid, then proceed forward else block the request
        next();
    })
}