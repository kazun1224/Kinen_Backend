import { ForbiddenException, Injectable } from '@nestjs/common';
import { Cigarette } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCigaretteDto } from './dto/create-cigarette.dto';
import { UpdateCigaretteDto } from './dto/update-cigarette';

@Injectable()
export class CigaretteService {
  constructor(private readonly prisma: PrismaService) {}

  getCigarettes(userId: number): Promise<Cigarette[]> {
    return this.prisma.cigarette.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  async getCigaretteById(
    userId: number,
    cigaretteId: number,
  ): Promise<Cigarette> {
    return this.prisma.cigarette.findFirst({
      where: {
        userId,
        id: cigaretteId,
      },
    });
  }

  async createCigarette(
    userId: number,
    dto: CreateCigaretteDto,
  ): Promise<Cigarette> {
    const cigarette = await this.prisma.cigarette.create({
      data: {
        userId,
        ...dto,
      },
    });
    this.prisma.cigarette.findMany;
    return cigarette;
  }

  async updateCgaretteById(
    userId: number,
    cigaretteId: number,
    dto: UpdateCigaretteDto,
  ) {
    const cigarette = await this.prisma.cigarette.findUnique({
      where: {
        id: cigaretteId,
      },
    });
    if (!cigarette || cigarette.userId !== userId) {
      throw new ForbiddenException('No permission to update');
    }

    return await this.prisma.cigarette.update({
      where: {
        id: cigaretteId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteCigaretteById(
    userId: number,
    cigaretteId: number,
  ): Promise<void> {
    const cigarette = await this.prisma.cigarette.findUnique({
      where: {
        id: cigaretteId,
      },
    });

    if (!cigarette || cigarette.userId !== userId) {
      throw new ForbiddenException('No permission to delete');
    }

    await this.prisma.cigarette.delete({
      where: {
        id: cigaretteId,
      },
    });
  }
}
