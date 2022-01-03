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
import _ from 'lodash';

@Controller('Folder')
export class FolderController {
    constructor(private FolderService: FolderService, private UserService: UserService) {}
    @Post('addFolder')
    async addFolder(@Req() req, @Body() body) {
        const { USERNAME, FOLDERNAME } = body;

        const userData = await this.UserService.getUserByName(USERNAME);

        if (userData === null) {
            return '일치하는 회원이 존재하지 않습니다. 회원 이름을 다시 한번 확인하시길 바랍니다.';
        }

        const result = await this.FolderService.addFolder(FOLDERNAME, userData.id);
        return result;
    }

    // 3. 유저는 자신의 폴더를 생성 순서대로 조회할 수 있으며, 이 때에 각 폴더에 저장된 이미지 갯수를 알 수 있다.
    @Get('getFolderList')
    async getFolderList(@Req() req, @Body() body) {
        const { USERNAME } = body;

        const userData = await this.UserService.getUserByName(USERNAME);

        if (userData === null) {
            return '일치하는 회원이 존재하지 않습니다. 회원 이름을 다시 한번 확인하시길 바랍니다.';
        }

        const result = await this.FolderService.getFolderList(userData.id);

        return result;
    }

    //4.유저는 특정 폴더에서 최근 저장한 순서대로 사진을 조회할 수 있다
    @Get('getImageListByFolderIdx')
    async getImageListByFolderIdx(@Req() req, @Body() body) {
        const { FOLDERNAME } = body;

        const folderData = await this.FolderService.getFolderByName(FOLDERNAME);

        const result = await this.FolderService.getImageListByFolderIdx(folderData.fld_idx);

        return result;
    }
}
