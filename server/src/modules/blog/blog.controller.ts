import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as BlogPost } from '../../database/entities/post.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Import JWT Auth Guard

@Controller('posts')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards(JwtAuthGuard) // Protect the route with JWT guard
  @Post()
  async create(@Body() createPostDto: CreatePostDto, @Request() req): Promise<BlogPost> {
    // Log the req.user to see what is attached to the request
    console.log(req.user); 

    // Check if the user is correctly attached
    const userId = req.user ? req.user.id : null;
    if (!userId) {
      throw new Error('User is not authenticated');
    }

    return this.blogService.createPost(createPostDto, userId);
  }
}
