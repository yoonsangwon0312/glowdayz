import {
    Post,
    Get,
    UseInterceptors,
    UploadedFile,
    Param,
    Res,
    Controller,
    Body,
    Req,
    HttpStatus,
} from '@nestjs/common';
import { FolderService } from './folder.service';
import { UserService } from 'src/user/user.service';

@Controller('Folder')
export class FolderController {
    constructor(private UploadService: FolderService, private UserService: UserService) {}
    @Post('addFolder')
    async addFolder(@Req() req, @Body() body) {
        const { USERNAME, FOLDERNAME } = body;

        const userData = await this.UserService.getUserByName(USERNAME);

        if (userData === null) {
            return '일치하는 회원이 존재하지 않습니다. 회원 이름을 다시 한번 확인하시길 바랍니다.';
        }

        const result = await this.UploadService.addFolder(FOLDERNAME, userData.id);
        return result;
    }
}
