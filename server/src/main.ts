import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Environment Variables:', process.env); // Logs all environment variables

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

