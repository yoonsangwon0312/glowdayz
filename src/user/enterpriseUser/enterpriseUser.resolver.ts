import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EnterpriseUserService } from './enterpriseUser.service';
import { addEnterpriseUserInputDto, addEnterpriseUserReturnDto } from './enterpriseUser.dto';

@Resolver()
export class EnterpriseUserResolver {
    constructor(private EnterpriseUserService: EnterpriseUserService) {}
    @Mutation((returns) => addEnterpriseUserReturnDto)
    async addEnterpriseUser(@Args('data') data: addEnterpriseUserInputDto) {
        // if(data.mbr_call === null) {
        //     throw new Error ('담당자 휴대폰번호는 필수 입력 사항입니다.')
        // }

        const result = await this.EnterpriseUserService.addEnterpriseUser(data);
        return result;
    }
}
