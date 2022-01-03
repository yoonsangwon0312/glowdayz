import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class ControllerAuthGuard extends AuthGuard('controller') {
    constructor(private JwtService: JwtService) {
        super();
    }
    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        const Authorization = req.get('Authorization') ? req.get('Authorization') : req.query.token;

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
            return true;
        } else {
            req.tokenInfo = {
                mem_idx: 0,
            };
            return true;
        }
    }
}
