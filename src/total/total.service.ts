import { Injectable } from '@nestjs/common';
import { CigaretteService } from 'src/cigarette/cigarette.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TotalService {
  constructor(
    private readonly prisma: PrismaService,
    // private readonly cigarette: CigaretteService,
  ) {}

  async getTotal(userId: number) {
    return await this.prisma.total.findFirst({
      where: {
        userId,
      },
    });
  }

  // async sumTotalAmount(userId: number) {
  //   const cigarettes = await this.prisma.cigarette.findMany({
  //     where: {
  //       userId,
  //     },
  //     select: {
  //       amount: true,
  //     },
  //   });
  //   const amounts = cigarettes.map((cigarette) => cigarette.amount);

  //   const totalAmount = amounts.reduce((total, amount) => {
  //     return total + amount;
  //   });

  //   await this.prisma.total.create({
  //     data: {
  //       userId,
  //       totalAmount,
  //     }
  //   })

  //   return totalAmount;
  // }
}
