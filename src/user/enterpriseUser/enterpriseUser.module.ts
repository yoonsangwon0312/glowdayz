import { Module } from '@nestjs/common';
import { EnterpriseUserResolver } from './enterpriseUser.resolver';
import { EnterpriseUserService } from './enterpriseUser.service';
@Module({
    imports: [],
    controllers: [],
    providers: [EnterpriseUserResolver, EnterpriseUserService],
})
export class EnterpriseUserModule {}
