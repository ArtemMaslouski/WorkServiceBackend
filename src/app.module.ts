import { Module } from '@nestjs/common';
import { WorkserviceModule } from './workservice/workservice.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [WorkserviceModule, UsersModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
