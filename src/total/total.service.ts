import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TotalService {
  constructor(private readonly prisma: PrismaService) {}

  async getTotal(userId: number) {
    return await this.prisma.total.findFirst({
      where: {
        userId,
      },
    });
  }

  async totalCalcByOnePack(userId: number, cigaretteId: number) {
    const cigarette = await this.prisma.cigarette.findFirst({
      where: {
        id: cigaretteId,
      },
    });

    const prevAmount = await this.prisma.total.findFirst({
      where: {
        userId,
      },
    });
    if (prevAmount) {
    }
    const newAmount = Number(prevAmount.totalAmount) + Number(cigarette.amount);
    const amount = await this.prisma.total.update({
      where: {
        userId,
      },
      data: {
        totalAmount: newAmount.toString(),
      },
    });

    return amount;
  }

  async totalCalcByCarton(userId: number, cigaretteId: number) {
    const carton = await this.prisma.carton.findFirst({
      where: {
        cigaretteId,
      },
    });

    const prevAmount = await this.prisma.total.findFirst({
      where: {
        userId,
      },
    });
    const newAmount =
      Number(prevAmount.totalAmount) + Number(carton.cartonAmount);
    const amount = await this.prisma.total.update({
      where: {
        userId,
      },
      data: {
        totalAmount: newAmount.toString(),
      },
    });

    return amount;
  }
}
