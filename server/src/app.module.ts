import { Module } from '@nestjs/common';
import { BlogModule } from './modules/blog/blog.module';
import { DatabaseModule } from './database/database.module'; 

@Module({
  imports: [DatabaseModule, BlogModule],
})
export class AppModule {}
