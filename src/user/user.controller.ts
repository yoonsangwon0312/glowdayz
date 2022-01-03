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
import { UserService } from './user.service';

@Controller('User')
export class UserController {
    constructor(private UserService: UserService) {}
    @Post('addUser')
    async addUser(@Req() req, @Body() body) {
        const { NAME } = body;
        const result = await this.UserService.addUser(NAME);
        return result;
    }
}
