import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('vacancies')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get')
  getVacancies() {
    return this.appService.getVacancies();
  }
  @Post('post')
  createVacancy(
    @Body('Position') Position: string,
    @Body('Salary') Salary: string,
    @Body('Company') Company: string,
    @Body('City') City: string,
  ) {
    return this.appService.createVacancy(Position, Salary, Company, City);
  }
}
