import { Controller, Get, Post } from '@nestjs/common';
import { WorkserviceService } from './workservice.service';

@Controller('workservice')
export class WorkserviceController {
  constructor(private readonly workserviceService: WorkserviceService) {}

  @Get()
  findAll() {
    return this.workserviceService.findAll();
  }

  @Get('/first')
  create() {
    return this.workserviceService.create();
  }
}
