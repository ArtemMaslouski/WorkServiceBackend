import { Controller, Post, Body, Get, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorator/roles.decorator';
import { UserDTO } from '../DTO/UserDTO';
import { Response } from 'express';
import passport from 'passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('Auth')
  @ApiResponse({
    status: 201,
    description: 'Пользователь успешно зарегистрирован',
  })
  @Post('register-user')
  createUser(@Body() userDTO: UserDTO) {
    return this.authService.registerUser(userDTO);
  }

  @ApiResponse({
    status: 201,
    description: 'Работадатель успешно создан',
  })
  @ApiTags('Auth')
  @Post('register-employer')
  createEmployer(@Body() userDto: UserDTO) {
    return this.authService.registerEmployer(userDto);
  }

  @ApiTags('Auth')
  @Post('login')
  async login(
    @Body() userDto: UserDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.validateUser(userDto, response);
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
