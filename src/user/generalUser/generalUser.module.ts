import { Module } from '@nestjs/common';
import { GeneralUserResolver } from './generalUser.resolver';
import { GeneralUserService } from './generalUser.service';
@Module({
    imports: [],
    controllers: [],
    providers: [
        // GeneralUserResolver,
        GeneralUserService,
    ],
})
export class GeneralUserModule {}
