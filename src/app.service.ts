import { Injectable } from '@nestjs/common';
import { Vacancy } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getVacancies(): Promise<Vacancy[]> {
    return this.prisma.vacancy.findMany();
  }

  async createVacancy(
    Position: string,
    Salary: string,
    Company: string,
    City: string,
  ): Promise<Vacancy> {
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
