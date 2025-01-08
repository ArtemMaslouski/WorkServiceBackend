import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Lesson api')
    .setDescription('This is my api')
    .setVersion('1.0')
    .addTag('API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);
  await app.listen(5000);
}
bootstrap();
