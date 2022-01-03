import { Injectable } from '@nestjs/common';
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

    async getFolderByName(fld_name: string) {
        const result = await this.prisma.fOLDER.findUnique({
            where: {
                fld_name: fld_name,
            },
        });

        return result;
    }

    async getFolderList(fld_user_idx: number) {
        const result = await this.prisma.fOLDER.findMany({
            where: {
                fld_user_idx: fld_user_idx,
            },
        });

        return result;
    }
}
