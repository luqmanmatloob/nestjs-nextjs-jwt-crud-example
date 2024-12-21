import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // User service to find users
import { JwtPayload } from './jwt-payload.interface'; // JWT payload interface

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UserService, // User service to validate users
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username); // Fetch user from DB
    if (user && user.password === password) { // You should replace with bcrypt hashing
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload: JwtPayload = { username: user.username, sub: user.userId }; // User payload
    return {
      access_token: this.jwtService.sign(payload), // Sign and generate JWT
    };
  }
}
