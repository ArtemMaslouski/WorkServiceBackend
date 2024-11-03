import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async hashPassword(password) {
    return bcrypt.hash(password, 10);
  }
  getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  async findUserByLogin(login: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { Login: login },
    });
  }
  async createUser(Login: string, Password: string): Promise<User> {
    const isExist = await this.findUserByLogin(Login);

    if (isExist) {
      throw new Error('Пользователь с таким логином уже существует ');
    }
    Password = await this.hashPassword(Password);
    return this.prisma.user.create({
      data: {
        Login,
        Password,
      },
    });
  }
}
