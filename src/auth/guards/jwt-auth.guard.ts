import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class JwtAuthGuard extends AuthGuard('access') {
    constructor(private JwtService: JwtService) {
        super();
    }
    canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        // return super.canActivate(new ExecutionContextHost([req]));
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
            return !!mem_idx;
        } else {
            req.tokenInfo = {
                mem_idx: 0,
            };
            return true;
        }
    }
}
