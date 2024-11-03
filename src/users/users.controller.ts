import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('get-users')
  getusers() {
    return this.usersService.getUsers();
  }

  @Post('create-user')
  createUser(@Body('Login') Login: string, @Body('Password') Password: string) {
    return this.usersService.createUser(Login, Password);
  }
}
