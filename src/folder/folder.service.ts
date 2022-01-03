import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import moment from 'moment';
import { stringify } from 'querystring';
import { ServiceCore } from 'src/_common/core/service.core';

@Injectable()
export class FolderService extends ServiceCore {
    // ServiceCore를 불러와 prisma를 사용
    async addFolder(fld_name: string, user_idx: number) {
        const result = await this.prisma.fOLDER.create({
            data: {
                fld_name: fld_name,
                fld_user_idx: user_idx,
                fld_created_et: new Date(),
            },
        });

        return result;
    }
}
