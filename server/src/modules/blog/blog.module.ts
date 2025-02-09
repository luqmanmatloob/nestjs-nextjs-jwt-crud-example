


// blog/BlogModule.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { Post } from '../../database/entities/post.entity';
import { User } from '../../database/entities/user.entity'; // Import User entity
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [TypeOrmModule.forFeature([Post, User]),AuthModule], // Add User here

  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
