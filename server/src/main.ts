



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with specific configuration
  app.enableCors({
    origin: 'http://localhost:3002',  // Allow requests from this origin (your frontend)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  // Allow specific HTTP methods
    allowedHeaders: 'Content-Type, Authorization',  // Allow these headers
    credentials: true,  // Allow cookies/credentials in requests
  });

  await app.listen(3000);
}
bootstrap();
