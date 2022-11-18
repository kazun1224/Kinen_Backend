import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CigaretteController } from './cigarette.controller';
import { CigaretteService } from './cigarette.service';

@Module({
  imports: [PrismaModule],
  controllers: [CigaretteController],
  providers: [CigaretteService]
})
export class CigaretteModule {}
