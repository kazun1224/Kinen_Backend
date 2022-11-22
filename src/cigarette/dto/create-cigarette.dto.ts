import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCigaretteDto {
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
}
