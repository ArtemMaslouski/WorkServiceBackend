import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO, userRole } from '../DTO/UserDTO';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async registerUser(userDTO: UserDTO) {
    const { Login, Password, Role = userRole.USER } = userDTO;
    const hashedPassword = await bcrypt.hash(Password, 10);
    return this.prisma.user.create({
      data: {
        Login,
        Password: hashedPassword,
        Role,
      },
    });
  }

  async registerEmployer(userDto: UserDTO) {
    const { Login, Password, Role = userRole.EMPLOYER } = userDto;
    const hashedPassword = await bcrypt.hash(Password, 10);
    return this.prisma.user.create({
      data: {
        Login,
        Password: hashedPassword,
        Role,
      },
    });
  }

  async validateUser(userDto: UserDTO) {
    const { Login, Password, Role } = userDto;
    const user = await this.prisma.user.findUnique({
      where: {
        Login: Login,
      },
    });
    const isValidPassword = await bcrypt.compare(Password, user.Password);
    if (!user) {
      throw new UnauthorizedException('Пользователя не существует');
    }

    if (!isValidPassword) {
      throw new UnauthorizedException('Неверный пароль');
    }

    const payload = { sub: user.id, Login: user.Login, roles: user.Role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
