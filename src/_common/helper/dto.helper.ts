import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString } from 'class-validator';

//getOne 혹은 getList 할때 InputType에 @Field((type) => Int) 를 @Field((type) => IntFilter, { nullable: true }) 로 사용
@InputType('IntFilterInputType')
@ObjectType('IntFilterObjectType')
export class IntFilter {
    @Field((type) => Int, { nullable: true })
    @IsInt()
    @IsOptional()
    equals: number;

    @Field((type) => [Int], { nullable: true })
    @IsInt({ each: true })
    @IsOptional()
    in: number[];

    @Field((type) => [Int], { nullable: true })
    @IsInt({ each: true })
    @IsOptional()
    notIn: number[];

    @Field((type) => Int, { nullable: true })
    @IsInt()
    @IsOptional()
    lt: number;

    @Field((type) => Int, { nullable: true })
    @IsInt()
    @IsOptional()
    lte: number;

    @Field((type) => Int, { nullable: true })
    @IsInt()
    @IsOptional()
    gt: number;

    @Field((type) => Int, { nullable: true })
    @IsInt()
    @IsOptional()
    gte: number;

    @Field((type) => IntFilter, { nullable: true })
    @IsOptional()
    not: IntFilter;
}

//getOne 혹은 getList 할때 InputType에 @Field((type) => String) 를 @Field((type) => StringFilter, { nullable: true }) 로 사용
export class StringFilter {
    @Field((type) => String, { nullable: true })
    @IsString()
    @IsOptional()
    equals: string;

    @Field((type) => [String], { nullable: true })
    @IsString({ each: true })
    @IsOptional()
    in: string[];

    @Field((type) => [String], { nullable: true })
    @IsString({ each: true })
    @IsOptional()
    notIn: string[];

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsOptional()
    lt: string;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsOptional()
    lte: string;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsOptional()
    gt: string;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsOptional()
    gte: string;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsOptional()
    contains: string;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsOptional()
    startsWith: string;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsOptional()
    endsWith: string;

    @Field((type) => StringFilter, { nullable: true })
    @IsOptional()
    not: StringFilter;
}
