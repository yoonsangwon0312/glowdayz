import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import moment from 'moment';
import { stringify } from 'querystring';
import { ServiceCore } from 'src/_common/core/service.core';

@Injectable()
export class PointService extends ServiceCore {
    // ServiceCore를 불러와 prisma를 사용
    async setIncreasePoint(user_idx: number, memo: string, amount: string, type: string, trg_idx: number) {
        const result = await this.prisma.uSER.update({
            where: {
                id: user_idx,
            },
            data: {
                usr_point: {
                    increment: Number(amount),
                },
            },
        });
        // const rest_point = thisUser.mem_point + amount;

        const result_log = await this.prisma.pOINT.create({
            data: {
                poi_trg_type: type,
                poi_trg_idx: trg_idx,
                poi_usr_idx: user_idx,
                poi_amount: amount,
                poi_memo: memo,
                poi_create_et: new Date(),
            },
        });
        return result_log;
    }
}
