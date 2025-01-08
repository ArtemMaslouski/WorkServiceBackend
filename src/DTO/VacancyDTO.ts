import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class VacancyDTO {
  @ApiProperty({ description: 'Позиция' })
  @IsString()
  @IsNotEmpty()
  Position: string;

  @ApiProperty({ description: 'Заработная плата' })
  @IsString()
  @IsNotEmpty()
  Salary: string;

  @ApiProperty({ description: 'Название компании' })
  @IsString()
  @IsNotEmpty()
  Company: string;

  @ApiProperty({ description: 'Город расположения' })
  @IsString()
  @IsNotEmpty()
  City: string;
}
