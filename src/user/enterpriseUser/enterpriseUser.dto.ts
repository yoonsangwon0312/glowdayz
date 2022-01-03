import { Field, InputType, ObjectType, OmitType, PickType, PartialType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import {
    IsEmail,
    IsInt,
    IsMobilePhone,
    IsOptional,
    IsString,
    IsUrl,
    Length,
} from 'class-validator';
import { rs_htmlclean } from 'src/_common/helper/validation.helper';
import { UserDeclare } from '../user.dto';

//addEnterpriseUser
@InputType()
export class addEnterpriseUserInputDto extends PartialType(
    PickType(UserDeclare, [
        'mbr_type',
        'mbr_id',
        'mbr_password',
        'mbr_name',
        'mbr_email',
        'mbr_phone',
        'mbr_call',
        'mbr_memo',
        'mbr_url',
        'mbr_category',
    ] as const),
    InputType,
) {}

@ObjectType()
export class addEnterpriseUserReturnDto extends PartialType(
    OmitType(UserDeclare, ['mbr_password'] as const),
    ObjectType,
) {}
