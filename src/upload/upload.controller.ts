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
    // 유저는 자신의 특정 폴더에 업로드된 사진을 저장할 수 있다.
    // 1. 사진은 어딘가의 이미지 서버에 저장이 되고 이에 대한 URL이 저장된다고 가정한다.(실제 이미지 업로드 기능은 필요 없음)
    // 2. N개의 사진을 동시에 저장할 수 있다.

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

        if (userData.usr_point < 100 * splitPhoto.length) {
            const needPoint = 100 * splitPhoto.length - userData.usr_point;
            console.log(1);
            return needPoint + '포인트가 부족합니다.';
        }
        if (splitPhoto.length > 1) {
            _.forEach(splitPhoto, (element) => {
                const result = this.UploadService.uploadPhoto(
                    folderData.fld_idx,
                    userData.id,
                    '/upload/files/' + folderData.fld_name + '/' + element,
                );

                this.FolderService.increaseCount(folderData.fld_idx);
                return 'success';
            });
        } else {
            const result = await this.UploadService.uploadPhoto(
                folderData.fld_idx,
                userData.id,
                '/upload/files/' + folderData.fld_name + '/' + PHOTONAME,
            );

            await this.FolderService.increaseCount(folderData.fld_idx);

            return result;
        }
    }
}
