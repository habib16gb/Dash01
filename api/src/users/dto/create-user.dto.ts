import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export enum enRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEnum(enRole)
  @IsOptional()
  role: enRole;
}
