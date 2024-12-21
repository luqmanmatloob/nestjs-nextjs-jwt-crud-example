import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from '../../database/entities/user.entity'; // User entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Import TypeORM User entity
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Export UserService for use in other modules (like Auth)
})
export class UserModule {}
