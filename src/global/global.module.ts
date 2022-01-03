import { Global, Module } from '@nestjs/common';
import { LoggerLibrary } from 'src/_common/library/logger.library';
import { UserService } from 'src/user/user.service'; // Folder 객체에서도 UserService를 사용하기위해 글로벌로 선언

/*
 ** 이 모듈은 전역적으로 사용되는 모듈, 서비스, 라이브러리를 입력하는 공간입니다.
 ** 하단 Array 에 분리하여 추가하시면 됩니다.
 */
const _GlobalModule = [];
const _GlobalService = [UserService];
const _GlobalLibrary = [LoggerLibrary];

@Global()
@Module({
    imports: [..._GlobalModule],
    providers: [..._GlobalService, ..._GlobalLibrary],
    exports: [..._GlobalModule, ..._GlobalService, ..._GlobalLibrary],
})
export class GlobalModule {}
