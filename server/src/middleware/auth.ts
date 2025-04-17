import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) : void | Response => {

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const authHeader = req.headers['authorization']; 
  const token = authHeader && authHeader.split(' ')[1]; // Extraer el token

  console.log(authHeader);
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload; 

    (req as any).user = decoded.username;
    console.log(decoded.username);

    next(); 
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token.' });
  }
};
  // TODO: verify the token exists and add the user data to the request object