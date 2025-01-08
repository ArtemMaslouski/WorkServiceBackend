import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { VacancyDTO } from './DTO/VacancyDTO';

@Controller('vacancies')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get')
  getVacancies() {
    return this.appService.getVacancies();
  }
  @Post('post')
  createVacancy(@Body() vacancyDTO: VacancyDTO) {
    return this.appService.createVacancy(vacancyDTO);
  }
}
