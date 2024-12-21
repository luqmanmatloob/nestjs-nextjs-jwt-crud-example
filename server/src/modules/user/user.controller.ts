import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'                                                                       ; // DTO for creating a user

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { username, password, email } = createUserDto;
    const newUser = await this.userService.createUser(username, password, email);
    return newUser;
  }
}
