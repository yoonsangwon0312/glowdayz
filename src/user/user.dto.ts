import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
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
import { IntFilter } from 'src/_common/helper/dto.helper';
import { rs_htmlclean } from 'src/_common/helper/validation.helper';

//User Read Declare
@InputType('UserDeclareInputType')
export class UserDeclare {
    @Field((type) => IntFilter, { nullable: true })
    @IsOptional()
    mbr_idx: IntFilter;

    @Field((type) => Int)
    @IsInt()
    mbr_type: number;

    @Field((type) => String)
    @IsString()
    mbr_id: string;

    @Field((type) => String)
    @IsString()
    @Transform((value) => rs_htmlclean(value))
    mbr_password: string;

    @Field((type) => String)
    @IsString()
    mbr_name: string;

    @Field((type) => String)
    @IsEmail()
    @Transform((value) => rs_htmlclean(value))
    @Length(10, 30)
    mbr_email: string;

    @Field((type) => String)
    @IsMobilePhone('ko-KR')
    @IsString()
    mbr_phone: string;

    @Field((type) => String)
    @IsString()
    mbr_call: string;

    @Field((type) => String)
    @IsString()
    mbr_memo: string;

    @Field((type) => String)
    @Transform((value) => rs_htmlclean(value))
    @IsUrl()
    mbr_url: string;

    @Field((type) => Int)
    @IsInt()
    mbr_category: number;
}

// @ObjectType('UserDeclareObjectType')
