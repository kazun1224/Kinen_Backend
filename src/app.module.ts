import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CigaretteModule } from './cigarette/cigarette.module';
import { TotalModule } from './total/total.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CigaretteModule,
    TotalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
