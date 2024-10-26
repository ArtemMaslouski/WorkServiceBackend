import { MiddlewareConsumer, Module } from '@nestjs/common';
import { WorkserviceService } from './workservice.service';
import { WorkserviceController } from './workservice.controller';
import { logger } from './workservice.service';
import { auth } from './workservice.service';
@Module({
  controllers: [WorkserviceController],
  providers: [WorkserviceService],
})
export class WorkserviceModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger, auth).forRoutes(WorkserviceController);
  }
}
