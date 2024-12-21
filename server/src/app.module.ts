import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlogModule } from './modules/blog/blog.module';
import { DatabaseModule } from './database/database.module'; 
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,       
    }),
    AuthModule, UserModule, DatabaseModule, BlogModule],
})
export class AppModule {}
