import { Module } from '@nestjs/common';
// import { FolderService } from './folder.service';
import { FolderController } from './folder.controller';

@Module({
    imports: [],
    controllers: [FolderController],
    providers: [],
})
export class FolderModule {}
