import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import moment from 'moment';
import { stringify } from 'querystring';
import { ServiceCore } from 'src/_common/core/service.core';

@Injectable()
export class UploadService extends ServiceCore {
    // ServiceCore를 불러와 prisma를 사용
    // async addUser(NAME: string) {
    //     const result = await this.prisma.uSER.create({
    //         data: {
    //             NAME: NAME,
    //             //krtime
    //             created_at: new Date(),
    //             updated_at: new Date(),
    //         },
    //     });
    //     return result;
    // }
}
