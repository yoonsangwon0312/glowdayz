import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AdminAuthGuard extends AuthGuard('access') {
    constructor(private JwtService: JwtService, private UserService: UserService) {
        super();
    }
    async canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        const Authorization = req.get('Authorization');

        if (Authorization) {
            const token = Authorization.replace('Bearer ', '');

            const { mem_idx } = this.JwtService.verify(token, {
                secret: process.env.TOKEN_SECRET,
            }) as {
                mem_idx: number;
            };
            req.tokenInfo = {
                mem_idx,
            };
            const { is_admin } = await this.UserService.getUserByIdx(mem_idx);
            if (is_admin) {
                return true;
            } else {
                throw new Error('need admin');
            }
        } else {
            throw new Error('need admin');
        }
    }
}
