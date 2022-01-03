import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GeneralUserService } from './generalUser.service';

@Resolver()
export class GeneralUserResolver {
    constructor(private UserService: GeneralUserService) {}
    // @Mutation()
    // async kakaoLogin() {
    //     const result = '1';
    //     return result;
    // }
}
