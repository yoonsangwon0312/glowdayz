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
import { diskStorage } from 'multer';
import { UploadService } from './upload.service';
import { FolderService } from 'src/folder/folder.service';
import { UserService } from 'src/user/user.service';
import _, { split } from 'lodash';

@Controller('Upload')
export class UploadController {
    constructor(
        private UploadService: UploadService,
        private FolderService: FolderService,
        private UserService: UserService,
    ) {}
    @Post('uploadPhoto')
    async uploadPhoto(@Req() req, @Body() body) {
        const { FOLDERNAME, USERNAME, PHOTONAME } = body;
        const userData = await this.UserService.getUserByName(USERNAME);
        if (userData === null) {
            return '일치하는 회원이 존재하지 않습니다. 회원 이름을 다시 한번 확인하시길 바랍니다.';
        }
        const folderData = await this.FolderService.getFolderByName(FOLDERNAME);
        if (folderData === null) {
            return '존재하지 않는 폴더 입니다. 폴더 이름을 다시 한번 확인하시길 바랍니다.';
        }

        if (userData.id !== folderData.fld_user_idx) {
            return '본인의 폴더가 아닙니다. 다시 본인의 폴더에만 업로드가 가능합니다.';
        }

        const splitPhoto = PHOTONAME.split(',');

        _.forEach(splitPhoto, (element) => {
            this.UploadService.uploadPhoto(
                folderData.fld_idx,
                userData.id,
                '/upload/files/' + folderData.fld_name + '/' + element,
            );
        });

        return 'success';
    }
}
