import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { LoggerLibrary } from '../library/logger.library';
import { DateMiddleware } from '../middleware/date.middleware';
import { prismaErrorCode } from '../errorHandler/errorCode/prisma.error.code';
import { Response } from 'express';

const prisma = new PrismaClient(); //{ log: ['info', 'query'] });
prisma.$use(DateMiddleware);
// prisma.$use(prismaMiddleware);

export class ServiceCore extends LoggerLibrary {
    protected readonly prisma: PrismaClient = prisma;
    protected origOptionFilter<PrismaArgsType>(origOption: PrismaArgsType) {
        const option = {};
        if (origOption) {
            for (const [key, value] of Object.entries(origOption)) {
                if (
                    (value !== 0 && !value) ||
                    (typeof value === 'object' && Object.entries(value).length === 0)
                )
                    continue;
                option[key] = value;
            }
        }
        return option as PrismaArgsType;
    }
    protected PrismaError<PrismaReturnType>(error: any, res?: Response) {
        const resFlag = res ? true : false;
        this.verbose('Generate Prisma Error');
        /*
         * 쿼리 엔진이 요청과 관련된 알려진 오류(고유 제약 조건 위반)
         */
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            resFlag ? (res.status(400).statusMessage = 'Prisma Error: Known Request') : null;
            throw new Error(
                `KnownRequestError :: Prisma Error Log
                \rErrorCode: ${error.code}
                \rTarget: ${JSON.stringify(error.meta)}
                \rMessage: ${JSON.stringify(prismaErrorCode[error.code])}
                \rClientVersion: ${error.clientVersion}`,
            );
        }
        /*
         * 쿼리 엔진이 '오류 코드가 없는 요청'과 관련된 오류를 반환 할 때
         */
        if (error instanceof Prisma.PrismaClientUnknownRequestError) {
            resFlag ? (res.status(400).statusMessage = 'Prisma Error: Unknown Request') : null;
            throw new Error(`UnknownRequestError :: Prisma Error Log
                \r쿼리 엔진이 '오류 코드가 없는 요청'과 관련된 오류를 반환했습니다.
                \rErrorMessage: ${error}`);
        }
        /*
         * 기본 엔진이 충돌하고 0이 아닌 종료 코드로 종료될 때
         */
        if (error instanceof Prisma.PrismaClientRustPanicError) {
            resFlag ? (res.status(400).statusMessage = 'Prisma Error: Rust Panic') : null;
            throw new Error(`RustPanicError :: Prisma Error Log
                \r기본 엔진이 충돌하고 0이 아닌 종료 코드로 종료되었습니다.
                \rErrorMessage: ${error}`);
        }
        /*
         * 쿼리 엔진이 시작되고 데이터베이스에 대한 연결이 생성될 때 문제가 발생할 때
         * 발생
         * ● prisma.$connect()가 OR일 때
         * ● 첫 번째 쿼리가 실행될 때
         * 원인
         * ● 데이터베이스에 대해 제공된 자격 증명이 잘못되었습니다.
         * ● 제공된 호스트 이름 및 포트로 실행 중인 데이터베이스 서버가 없습니다.
         * ● 쿼리 엔진 HTTP 서버가 바인딩하려는 포트가 이미 사용 중입니다.
         * ● 누락되었거나 액세스할 수 없는 환경 변수가 존재합니다.
         * ● 현재 플랫폼에 대한 쿼리 엔진 바이너리를 찾을 수 없습니다. (generator블록)
         */
        if (error instanceof Prisma.PrismaClientInitializationError) {
            resFlag ? (res.status(400).statusMessage = 'Prisma Error: Initialization') : null;
            throw new Error(`InitializationError :: Prisma Error Log
                \r쿼리 엔진이 시작되고 데이터베이스에 대한 연결이 생성될 때 문제가 발생했습니다.
                \r발생
                \r● prisma.$connect()가 OR일 때
                \r● 첫 번째 쿼리가 실행될 때
                \r원인
                \r● 데이터베이스에 대해 제공된 자격 증명이 잘못되었습니다.
                \r● 제공된 호스트 이름 및 포트로 실행 중인 데이터베이스 서버가 없습니다.
                \r● 쿼리 엔진 HTTP 서버가 바인딩하려는 포트가 이미 사용 중입니다.
                \r● 누락되었거나 액세스할 수 없는 환경 변수가 존재합니다.
                \r● 현재 플랫폼에 대한 쿼리 엔진 바이너리를 찾을 수 없습니다. (generator블록)
                \rErrorMessage: ${error}`);
        }
        /*
         * 데이터 유효성 검사가 실패했을 때
         * ● 누락된 필드 - ex) 'data: {}' 새 레코드를 생성할 때 빈 속성
         * ● 잘못된 필드 유형이 제공됨 - ex) Boolean 필드로 생성, "Hello"입력
         */
        if (error instanceof Prisma.PrismaClientValidationError) {
            resFlag ? (res.status(400).statusMessage = 'Prisma Error: Validation') : null;
            throw new Error(`ValidationError :: Prisma Error Log
                \r데이터 유효성 검사가 실패했습니다.
                \r● 누락된 필드 - ex) 'data: {}' 새 레코드를 생성할 때 빈 속성
                \r● 잘못된 필드 유형이 제공됨 - ex) Boolean 필드로 생성, "Hello"입력
                \rErrorMessage: ${error}`);
        }
        // 모든 에러 필터를 거르고 나오는 에러(보통 OverFlow가 많이 걸림)
        else {
            resFlag ? (res.status(400).statusMessage = 'Prisma Error: Not Match') : null;
            throw new Error('NotMatchError: ' + error);
        }
        return error as PrismaReturnType; // return type의 변경을 막기위해 존재(default void => .then) - 삭제하지 마세요
    }
}
