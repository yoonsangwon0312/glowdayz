import { Injectable } from '@nestjs/common';
import { ServiceCore } from 'src/_common/core/service.core';
import sha256 from 'sha256';
import { Prisma } from '@prisma/client';

@Injectable()
export class GeneralUserService extends ServiceCore {
    async addUser() {
        console.log('hello');
    }
}
