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
      include: {
        carton: true,
      },
    });
  }

  async createCigarette(userId: number, dto: CreateCigaretteDto) {
    const cigaretteDto = {
      name: dto.name,
      tar: dto.tar,
      numberOfCigarette: dto.numberOfCigarette,
      amount: dto.amount,
    };
    const cartonDto = {
      boxes: dto.boxes,
      cartonAmount: dto.cartonAmount,
    };
    const newCigarette = await this.prisma.cigarette.create({
      data: {
        userId,
        ...cigaretteDto,
        carton: {
          create: {
            ...cartonDto,
          },
        },
      },
      include: {
        carton: true,
      },
    });

    return newCigarette;
  }

  async updateCigaretteById(
    userId: number,
    cigaretteId: number,
    dto: UpdateCigaretteDto,
  ) {
    const cigaretteDto = {
      name: dto.name,
      tar: dto.tar,
      numberOfCigarette: dto.numberOfCigarette,
      amount: dto.amount,
    };

    const cartonDto = {
      boxes: dto.boxes,
      cartonAmount: dto.cartonAmount,
    };

    const prevCigarette = await this.prisma.cigarette.findUnique({
      where: {
        id: cigaretteId,
      },
    });
    if (!prevCigarette || prevCigarette.userId !== userId) {
      throw new ForbiddenException('No permission to update');
    }

    const prevCarton = await this.prisma.carton.findFirst({
      where: {
        cigaretteId: cigaretteId,
      },
    });

    if (!prevCarton) {
      throw new ForbiddenException('No permission to update');
    }

    const newCigarette = await this.prisma.cigarette.update({
      where: {
        id: cigaretteId,
      },
      data: {
        ...cigaretteDto,
        carton: {
          update: {
            ...cartonDto,
          },
        },
      },
      include: {
        carton: true,
      },
    });
    // const newCarton = await this.prisma.carton.update({
    //   where: {
    //     id: prevCarton.id,
    //   },
    //   data: {
    //     ...cartonDto,
    //   },
    // });

    // const createdCigaretteDate = { ...newCigarette, ...newCarton };

    return newCigarette;
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
