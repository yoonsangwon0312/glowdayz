import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'access') {
    constructor(private readonly UserService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.TOKEN_SECRET,
        });
    }

    async validate(payload) {
        const idx = payload.mem_idx;
        const user = await this.UserService.getUserByIdx(idx);
        if (!user) {
            throw new UnauthorizedException('잘못된 토큰입니다.');
        }
        return user;
    }
}
