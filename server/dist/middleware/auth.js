import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extraer el token
    console.log(authHeader);
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded.username;
        console.log(decoded.username);
        next();
    }
    catch (error) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};
// TODO: verify the token exists and add the user data to the request object
