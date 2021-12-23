import { ValidationError } from '@nestjs/common';
import { Context } from '@nestjs/graphql';
import { Response } from 'express';
import { validationErrorCode } from '../errorCode/validation.error.code';

/*
 * if is_develop == ture: 'return all Message'.
 * if is_develop == false: 'return only code'.
 */
export function throwValidationErrorCode(errors: ValidationError[]) {
    const errorKey = errors.map((obj) => Object.keys(obj.constraints)).flat(1);
    const errorConstraints = errors.map((obj) => obj.constraints).flat(1);
    console.log('errorKey: ', errorKey);
    console.log('errorConstraints: ', errorConstraints);
    const message = [];
    if (process.env.NODE_ENV === 'development') {
        errorKey.forEach((key) => {
            message.push(
                validationErrorCode[key] !== undefined
                    ? JSON.stringify(validationErrorCode[key])
                    : JSON.stringify({
                          code: 'V9999',
                          message: '관리자에게 문의하세요.',
                          solutionMessage:
                              '존재하지 않는 에러코드입니다. 에러코드를 추가해 주세요. :: Class-Validation Error',
                          originDescription: '',
                      }),
            );
        });
    }
    message.push(JSON.stringify(errorConstraints));
    throw new Error(message.join(','));
}
