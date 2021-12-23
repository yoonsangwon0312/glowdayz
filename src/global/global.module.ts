import { Global, Module } from '@nestjs/common';
import { LoggerLibrary } from 'src/_common/library/logger.library';

/*
 ** 이 모듈은 전역적으로 사용되는 모듈, 서비스, 라이브러리를 입력하는 공간입니다.
 ** 하단 Array 에 분리하여 추가하시면 됩니다.
 */
const _GlobalModule = [];
const _GlobalService = [];
const _GlobalLibrary = [LoggerLibrary];

@Global()
@Module({
    imports: [..._GlobalModule],
    providers: [..._GlobalService, ..._GlobalLibrary],
    exports: [..._GlobalModule, ..._GlobalService, ..._GlobalLibrary],
})
export class GlobalModule {}
