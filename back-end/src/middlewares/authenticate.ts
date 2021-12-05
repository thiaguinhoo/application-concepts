import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface UserPayload extends JwtPayload {
    email: string;
  }
}

export default async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.headers.authorization) {
    const { authorization } = req.headers;
    const [bearer, jwtToken] = authorization.split(' ');
    if (/^Bearer$/.test(bearer)) {
      try {
        const decoded = await (<jwt.UserPayload>(
          jwt.verify(jwtToken, process.env.SECRET_KEY as string)
        ));
        if (decoded.email) {
          req.userEmail = decoded.email;
          return next();
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
  res.status(401).json({ error: 'required authorization' });
}
