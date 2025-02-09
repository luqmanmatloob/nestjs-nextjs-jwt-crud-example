// blog/blog.controller.ts
import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as BlogPost } from '../../database/entities/post.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('posts')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPostDto: CreatePostDto, @Request() req): Promise<BlogPost> {
    console.log(req.user); // Debug: Check the user object
    const userId = req.user.sub; // Use `sub` from the JWT payload
    return this.blogService.createPost(createPostDto, userId);
  }
}
