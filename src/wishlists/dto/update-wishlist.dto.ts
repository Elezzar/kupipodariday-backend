import { PartialType } from '@nestjs/swagger';

import {
  ArrayNotEmpty,
  IsArray,
  IsNumber,
  IsOptional,
  IsUrl,
  Length,
} from 'class-validator';

import { CreateWishlistDto } from './create-wishlist.dto';

export class UpdateWishlistDto extends PartialType(CreateWishlistDto) {
  @IsOptional()
  @Length(1, 250)
  name: string;

  @IsOptional()
  @IsUrl()
  image: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber()
  itemsId: number[];

  @IsOptional()
  @Length(10, 1500)
  description: string;
}
