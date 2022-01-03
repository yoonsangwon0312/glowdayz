import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const AuthUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
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
    return req['user'];
});
