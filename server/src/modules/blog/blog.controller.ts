// blog/BlogController.ts
import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as BlogPost } from '../../database/entities/post.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Use the JWT Auth Guard

@Controller('posts')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards(JwtAuthGuard) // Protect the route with the JWT guard
  @Post()
  async create(@Body() createPostDto: CreatePostDto, @Request() req): Promise<BlogPost> {
    const userId = req.user.userId; // Extract userId from JWT payload
    return this.blogService.createPost(createPostDto, userId);
  }
}
