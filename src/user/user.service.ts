import { Injectable } from '@nestjs/common';
import { ServiceCore } from 'src/_common/core/service.core';
import sha256 from 'sha256';
import { member, Prisma } from '@prisma/client';

@Injectable()
export class UserService extends ServiceCore {
    async getUserByIdx(
        idx: number,
    ): Promise<
        Partial<member> & {
            is_member: boolean;
            is_admin: boolean;
            mem_idx: number;
            mem_level: number;
            mem_point: number;
            mem_phone: string;
        }
    > {
        const no_member_obj = {
            mem_idx: 0,
            mem_level: 0,
            mem_point: 0,
            is_member: false,
            is_admin: false,
            mem_phone: '',
        };

        if (!idx) {
            return no_member_obj;
        }
        const result = await this.prisma.member.findUnique({
            where: {
                mbr_idx: idx,
            },
        });
    }
}
