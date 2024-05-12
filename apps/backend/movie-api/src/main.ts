import { ResponseInterceptor } from '@api/shared';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: 422,
  }));
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(8080);
  const logger = new Logger('bootstrap');
  logger.log(`Listening on ${await app.getUrl()}`);
}

bootstrap();
