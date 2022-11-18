import { Injectable } from '@nestjs/common';
import { Cigarette } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

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
  async getCigaretteById(userId: number, cigaretteId:number): Promise<Cigarette> {
    return this.prisma.cigarette.findFirst({
      where: {
        userId,
        id:cigaretteId,

      },
    });
  }
}
