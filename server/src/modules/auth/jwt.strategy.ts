import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface'; // Payload structure
import { UserService } from '../user/user.service'; // User service to fetch user data

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from Bearer header
      secretOrKey: process.env.JWT_SECRET || 'your-secret-key', // JWT secret key
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.usersService.findOneByUsername(payload.username); // Find user by username
    if (!user) {
      return null; // If user doesn't exist, return null
    }
    return user; // Attach user to request object
  }
}
