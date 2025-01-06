import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorator/roles.decorator';
import { UserDTO } from 'src/DTO/UserDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('Auth')
  @Post('register-user')
  createUser(@Body() userDTO: UserDTO) {
    return this.authService.registerUser(userDTO);
  }

  @ApiTags('Auth')
  @Post('register-employer')
  createEmployer(@Body() userDto: UserDTO) {
    return this.authService.registerEmployer(userDto);
  }

  @ApiTags('Auth')
  @Post('login')
  async login(@Body() userDto: UserDTO) {
    return this.authService.validateUser(userDto);
  }

  @ApiTags('Auth')
  @Get('get-users')
  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Roles('user')
  getusers() {
    return this.authService.getUsers();
  }
}
