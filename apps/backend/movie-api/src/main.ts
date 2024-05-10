import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
  const logger = new Logger('bootstrap');
  logger.log(`Listening on ${await app.getUrl()}`);
  
}
bootstrap();
