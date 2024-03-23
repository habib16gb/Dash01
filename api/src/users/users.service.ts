import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto, enRole } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(data: CreateUserDto) {
    data.role = enRole.USER;
    try {
      const newUser = await this.prismaService.user.create({
        data,
      });
      return newUser;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new HttpException(
            `${error.meta?.modelName} with this ${error.meta?.target[0]} already exist!`,
            HttpStatus.CONFLICT,
          );
        }
        console.log(error);
        throw new BadRequestException(error);
      }

      throw new BadRequestException(error.messsage);
    }
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    try {
      const user = await this.prismaService.user.findUnique({ where: { id } });

      if (!user) {
        throw new NotFoundException(`no user with id = ${id}`);
      }

      return user;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, data: UpdateUserDto) {
    try {
      const userUpdated = await this.prismaService.user.update({
        where: { id },
        data,
      });
      return userUpdated;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new HttpException(
            `${error.meta?.modelName} ${error.meta?.cause}`,
            HttpStatus.NOT_FOUND,
          );
        }
      }
      throw new HttpException(error.message, error.status);
    }
  }

  async remove(id: number) {
    try {
      await this.prismaService.user.delete({ where: { id } });
      return `user with id: ${id} deleted success`;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new HttpException(
            `${error.meta?.modelName} ${error.meta?.cause}`,
            HttpStatus.NOT_FOUND,
          );
        }
      }
      throw new HttpException(error.message, error.status);
    }
  }
}
