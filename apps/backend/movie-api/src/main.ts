import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8080);
  const logger = new Logger('bootstrap');
  logger.log(`Listening on ${await app.getUrl()}`);
  
}
bootstrap();
