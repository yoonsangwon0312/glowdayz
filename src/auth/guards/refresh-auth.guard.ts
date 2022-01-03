import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
@Injectable()
export class RefreshAuthGuard extends AuthGuard('refresh') {
    constructor(private JwtService: JwtService) {
        super();
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        // return super.canActivate(new ExecutionContextHost([req]));
        const Authorization = req.get('Authorization');

        if (!Authorization) {
            throw new Error('Authorization undefined');
        }
        const token = Authorization.replace('Bearer ', '');
        const { mem_idx } = this.JwtService.verify(token, {
            secret: process.env.REFRESH_TOKEN_SECRET,
        }) as {
            mem_idx: number;
        };
        req.tokenInfo = {
            mem_idx,
            token,
        };
        return !!mem_idx;
    }
}
