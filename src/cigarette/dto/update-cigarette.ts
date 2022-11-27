import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCigaretteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  tar: string;

  @IsString()
  @IsNotEmpty()
  numberOfCigarette: string;

  @IsString()
  @IsNotEmpty()
  amount: string;

  @IsString()
  @IsNotEmpty()
  boxes: string;

  @IsString()
  @IsNotEmpty()
  cartonAmount: string;
}
