import { Injectable } from '@nestjs/common';
import { Vacancy } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { VacancyDTO } from './DTO/VacancyDTO';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getVacancies(): Promise<Vacancy[]> {
    return this.prisma.vacancy.findMany();
  }

  async createVacancy(vacancyDTO: VacancyDTO): Promise<Vacancy> {
    const { Position, Salary, Company, City } = vacancyDTO;
    return this.prisma.vacancy.create({
      data: {
        Position,
        Salary,
        Company,
        City,
      },
    });
  }
}
