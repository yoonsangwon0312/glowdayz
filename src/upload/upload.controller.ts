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
import { UploadService } from './upload.service';

@Controller('User')
export class UploadController {
    constructor(private UploadService: UploadService) {}
    @Post('addUser')
    async addUser(@Req() req, @Body() body) {
        const { NAME } = body;
        const result = 1;
        return result;
    }
}
