import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../../database/entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from '../../database/entities/user.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createPost(createPostDto: CreatePostDto, userId: number): Promise<Post> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const post = this.postRepository.create({
      ...createPostDto,
      user,
    });

    return await this.postRepository.save(post);
  }
}
