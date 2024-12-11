import { Controller, Post, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as BlogPost } from '../../database/entities/post.entity';

@Controller('posts')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<BlogPost> {
    return this.blogService.createPost(createPostDto);
  }
}
