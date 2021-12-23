import { Prisma } from '.prisma/client';
import { Request, Response, NextFunction } from 'express';

export function prismaMiddleware(
    //     params: Prisma.MiddlewareParams,
    //     next: (params: Prisma.MiddlewareParams) => Promise<T>,
    // ) {
    // error,
    res: Response,
    req: Request,
    next: NextFunction,
) {
    console.log('prismaMiddleware');
    // console.log('params: ', params);
    // return next(params);
    // console.log(error);
    console.log(res);
    // console.log(req);
    res.status(400).statusMessage = 'Prisma Error';
    next();
}
