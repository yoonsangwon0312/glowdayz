import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
@Injectable()
export class FindPassowrdAuthGuard extends AuthGuard('findPassowrd') {
    constructor(private JwtService: JwtService) {
        super();
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        const Authorization = req.get('Authorization');

        if (!Authorization) {
            throw new Error('Authorization undefined');
        }
        const token = Authorization.replace('Bearer ', '');
        const { mem_email } = this.JwtService.verify(token, {
            secret: process.env.FINDPASSWORD_TOKEN_SECRET,
        }) as {
            mem_email: string;
        };
        req.tokenInfo = {
            mem_email,
            token,
        };
        return !!mem_email;
    }
}
