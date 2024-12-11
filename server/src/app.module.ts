import { Module } from '@nestjs/common';
import { BlogModule } from './modules/blog/blog.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,       
    }),
    DatabaseModule, BlogModule],
})
export class AppModule {}
