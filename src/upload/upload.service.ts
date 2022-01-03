import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import moment from 'moment';
import { stringify } from 'querystring';
import { ServiceCore } from 'src/_common/core/service.core';

@Injectable()
export class UploadService extends ServiceCore {
    // ServiceCore를 불러와 prisma를 사용
    async uploadDB() {}
}
