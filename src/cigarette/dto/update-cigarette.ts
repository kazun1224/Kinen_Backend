import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCigaretteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsOptional()
  tar: number;

  @IsInt()
  @IsNotEmpty()
  numberOfCigarette: number;

  @IsInt()
  @IsNotEmpty()
  amount: number;
}
