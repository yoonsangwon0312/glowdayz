import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import _ from 'lodash';
import moment from 'moment';
// lightsail database timezone 설정 이슈로 date middleware 생성
export async function DateMiddleware<T = any>(
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<T>,
) {
    check_date(params.args);
    const result = await next(params);
    return_date(result);
    return result;
}

function check_date(obj): void {
    _.forEach(obj, (value, key) => {
        if (value instanceof Date) {
            const thisHour = value.getHours();
            value.setHours(thisHour + 9);
            return;
        }
        if (typeof value === 'object') return check_date(value);
        return;
    });
    return;
}

function return_date(obj): void {
    _.forEach(obj, (value, key) => {
        if (value instanceof Date) {
            const thisHour = value.getHours();
            value.setHours(thisHour - 9);
            return;
        }
        if (typeof value === 'object') return return_date(value);
        return;
    });
    return;
}
