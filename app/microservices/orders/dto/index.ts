import {
    IProducts,
} from '../types';

import {
    IsArray,
    IsNumber,
    IsString,
    IsOptional,
} from 'class-validator';

export class OrderCreateDto {

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsNumber()
    index: number;

    @IsArray()
    products: IProducts[];

}