import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils/forward-ref.util';
import { CigaretteModule } from 'src/cigarette/cigarette.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TotalController } from './total.controller';
import { TotalService } from './total.service';

@Module({
  imports: [PrismaModule],
  controllers: [TotalController],
  providers: [TotalService],
})
export class TotalModule {}
