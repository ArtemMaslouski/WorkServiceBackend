import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export enum userRole {
  ADMIN = 'admin',
  USER = 'user',
  EMPLOYER = 'employer',
}
export class UserDTO {
  @ApiProperty({ description: 'Логин пользователя' })
  @IsString()
  @IsNotEmpty()
  Login: string;

  @ApiProperty({ description: 'Пароль пользователя' })
  @IsString()
  @IsNotEmpty()
  Password: string;

  Role: userRole;
}
