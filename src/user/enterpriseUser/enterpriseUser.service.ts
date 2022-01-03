import { Injectable } from '@nestjs/common';
import { ServiceCore } from 'src/_common/core/service.core';
import sha256 from 'sha256';
import { Prisma } from '@prisma/client';

@Injectable()
export class EnterpriseUserService extends ServiceCore {
    //create
    async addEnterpriseUser(data: Prisma.memberCreateInput) {
        //encryption password
        const encryptionPassword = sha256(data.mbr_password + data.mbr_id);
        data.mbr_password = encryptionPassword;
        data.mbr_type = 1;
        const result = await this.prisma.member.create({
            data: data,
        });

        return result;
    }
    //readOne
    async getEnterpriseUserOne(idx: number) {
        const result = await this.prisma.member.findUnique({
            where: {
                mbr_idx: idx,
            },
        });
        return result;
    }
    //readList
    async getEnterpriseUserList(origOption: Prisma.memberFindManyArgs) {
        const option = {};
        for (const [key, value] of Object.entries(origOption)) {
            if (
                (value !== 0 && !value) ||
                (typeof value === 'object' && Object.entries(value).length === 0)
            )
                continue;
            option[key] = value;
        }
        const result = await this.prisma.member.findMany(option);
        return result;
    }
    //update
    async updateEnterpriseUser(idx: number, data: Prisma.memberUpdateArgs) {
        const result = await this.prisma.member.update({
            where: {
                mbr_idx: idx,
            },
            data: data,
        });
        return result;
    }

    //delete
    async deleteEnterpriseUser(idx: number) {
        const result = await this.prisma.member.delete({
            where: {
                mbr_idx: idx,
            },
        });
        return result;
    }
    //signIn
    //signOut
    //
}
