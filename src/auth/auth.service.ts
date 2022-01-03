import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ServiceCore } from 'src/_common/core/service.core';

@Injectable()
export class AuthTokenService extends ServiceCore {
    constructor(private JwtService: JwtService) {
        super();
    }

    async setAccessToken(mem_idx: number) {
        const payload = { mem_idx };
        const setAccessToken = await this.JwtService.sign(payload, {
            expiresIn: 99999999,
            // expiresIn: 10,
            secret: process.env.TOKEN_SECRET,
        });
        return setAccessToken;
    }
    // 비밀번호 찾기용 토큰
    async setFindPasswordToken(mem_email: string) {
        const payload = { mem_email };
        const setFindPasswordToken = await this.JwtService.sign(payload, {
            expiresIn: 60000,
            secret: process.env.FINDPASSWORD_TOKEN_SECRET,
        });
        return setFindPasswordToken;
    }

    async setRefreshToken(mem_idx: number) {
        const payload = { mem_idx };
        const setRefreshToken = await this.JwtService.sign(payload, {
            expiresIn: 3600,
            secret: process.env.REFRESH_TOKEN_SECRET,
        });
        return setRefreshToken;
    }

    async verifyAccessToken(token: string) {
        const verifyAccessToken = await this.JwtService.verify(token, {
            secret: process.env.TOKEN_SECRET,
        });
        return verifyAccessToken;
    }

    // 추가예정 : database refresh_token
    // async addRefreshToken(idx: number, token: string) {
    //     const result = await this.prisma.rs_refresh_token.upsert({
    //         where: {
    //             mem_idx: idx,
    //         },
    //         update: {
    //             refresh_token: token,
    //         },
    //         create: {
    //             mem_idx: idx,
    //             refresh_token: token,
    //         },
    //     });
    //     return result;
    // }

    // async getRefreshToken(mem_idx: number) {
    //     const result = await this.prisma.rs_refresh_token.findUnique({
    //         where: {
    //             mem_idx: mem_idx,
    //         },
    //     });
    //     if (result) return result.refresh_token;
    // }

    // async deleteRefreshToken(mem_idx: number) {
    //     const result = await this.prisma.rs_refresh_token.deleteMany({
    //         where: {
    //             mem_idx: mem_idx,
    //         },
    //     });
    //     if (result.count === 0) {
    //         throw new Error('이미 로그아웃이 되었습니다');
    //     }
    //     return result;
    // }
}
