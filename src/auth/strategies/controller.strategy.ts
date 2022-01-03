import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class ControllerStrategy extends PassportStrategy(Strategy, 'controller') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.TOKEN_SECRET,
        });
    }

    // async validate(payload: any) {
    //     console.log(payload);
    //     return { username: payload.mem_idx };
    // }
}
