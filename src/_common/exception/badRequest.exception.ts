import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import express from 'express';
import { ServiceCore } from 'src/_common/core/service.core';

@Catch(BadRequestException)
export class BadRequestExceptionFilter extends ServiceCore implements ExceptionFilter<BadRequestException> {
    public catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse() as express.Response;
        const request = ctx.getRequest() as express.Request;
        // const errorList = exception.response.message;
        const errorList = exception.getStatus(); //로 하면 안되는 것일까 ?
        //에러목록 로그로 기록하는 로직 추가 필요
        console.log(response);
        console.log(errorList);
        // this.error('BadRequest Error :: Check Error Log', errorList);
        throw new Error('BadRequest Error');
    }
}
