import { Module } from '@nestjs/common';
import { GeneralUserModule } from './generalUser/generalUser.module';
import { EnterpriseUserModule } from './enterpriseUser/enterpriseUser.module';
import { UserService } from './user.service';
@Module({
    imports: [GeneralUserModule, EnterpriseUserModule],
    controllers: [],
    providers: [UserService],
})
export class UserModule {}
