import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/user.entity'; // User entity
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // TypeORM repository for User
  ) {}

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async createUser(username: string, password: string, email: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password before saving
    const newUser = this.userRepository.create({ username, password: hashedPassword, email });
    return this.userRepository.save(newUser);
  }
  
  // Optional: You can add a method to validate the user during login
  async validatePassword(username: string, password: string): Promise<boolean> {
    const user = await this.findOneByUsername(username);
    if (!user) {
      return false;
    }
    return bcrypt.compare(password, user.password); // Compare the password with the stored hashed password
  }
}
