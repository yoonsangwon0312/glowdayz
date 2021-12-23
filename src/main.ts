// import 'pinpoint-node-agent';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import { ValidationError } from 'class-validator';
import { BadRequestExceptionFilter } from './_common/exception/badRequest.exception';
import { LoggerLibrary } from './_common/library/logger.library';
import { HeaderMiddleware } from './_common/middleware/header.middleware';
import { urlencoded, json, Response } from 'express';
import cookieParser from 'cookie-parser';
import { throwValidationErrorCode } from './_common/errorHandler/errorAction/validation.error.action';
import createErrors from 'http-errors';
import { Context } from '@nestjs/graphql';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: new LoggerLibrary(),
    });
    const newErrorMap = new Map([['ValidationError', createErrors.BadRequest]]);
    app.use((err, req, res, next) => {
        console.log(3);
        console.log('err: ', err);
        const newError = newErrorMap.get(err.name);
        if (newError) {
            next(new newError(err.message));
        } else {
            next(err);
        }
    });
    app.use(HeaderMiddleware);
    app.use(cookieParser());
    app.useGlobalPipes(
        new ValidationPipe({
            skipMissingProperties: true, // 없는 객체의 유효성 검사(class-validate) 생략
            transform: true, // 요청에서 넘어온 자료들의 형변환 가능여부
            whitelist: true, // 유효성 검사(validation)을 위한 decorator가 붙어있지 않은 속성들은 제거
            forbidNonWhitelisted: process.env.NODE_ENV === 'development' ? true : false, // DTO에 정의되지 않은 값이 넘어오면 request 자체를 막음(400 error).
            exceptionFactory: (errors: ValidationError[]) => {
                throwValidationErrorCode(errors);
            },
        }),
    );
    // app.useGlobalFilters(new BadRequestExceptionFilter());
    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
    // app.enableCors(
    //     process.env.NODE_ENV === 'development'
    //         ? {
    //               credentials: true,
    //               methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //               origin: ['http://localhost:4000', 'http://localhost:3000'],
    //           }
    //         : null,
    // );
    app.enableCors({
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        origin: true,
    });
    await app.listen(process.env.NODE_PORT ? process.env.NODE_PORT : 3000);
}
bootstrap();
