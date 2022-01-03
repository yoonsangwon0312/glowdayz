import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { AllowedRoles } from './role.decorator';
import { UserService } from 'src/user/user.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly jwtService: JwtService,
        private readonly UserService: UserService,
    ) {}
    async canActivate(context: ExecutionContext) {
        const roles = this.reflector.get<AllowedRoles>('roles', context.getHandler());

        let req;
        switch (context['contextType']) {
            case 'http':
                {
                    req = context.switchToHttp().getRequest();
                }
                break;
            case 'graphql':
                {
                    const gqlContext = GqlExecutionContext.create(context).getContext<{
                        req: Request;
                    }>();
                    req = gqlContext.req;
                }
                break;
        }
        const token = req.cookies.accessToken;

        let mem_idx = 0;
        if (token) {
            const tokenData = this.jwtService.verify(token, {
                secret: process.env.TOKEN_SECRET,
            }) as {
                mem_idx: number;
            };
            mem_idx = tokenData.mem_idx;
        }

        const memData = await this.UserService.getUserByIdx(mem_idx);
        req['user'] = memData;

        switch (roles) {
            case 'Admin':
                {
                    if (memData.is_admin) {
                        return true;
                    } else {
                        throw new Error('need admin');
                    }
                }
                break;
            case 'User':
                {
                    if (memData.is_member) {
                        return true;
                    } else {
                        throw new Error('non-member can`t use');
                    }
                }
                break;
            case 'Any':
                {
                    return true;
                }
                break;
            default: {
                throw new Error('not allowed roles');
            }
        }
    }
}
