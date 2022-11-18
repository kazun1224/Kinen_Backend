import { Controller, Get, Param, ParseIntPipe, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Cigarette } from '@prisma/client';
import { Request } from 'express';
import { CigaretteService } from './cigarette.service';

@UseGuards(AuthGuard('jwt'))
@Controller('cigarette')
export class CigaretteController {
  constructor(private readonly cigaretteService: CigaretteService) {}

  @Get()
  getCigarettes(@Req() req: Request): Promise<Cigarette[]> {
    return this.cigaretteService.getCigarettes(req.user.id);
  }

  @Get(':id')
  getCigaretteById(@Req() req: Request, @Param('id', ParseIntPipe) cigaretteId:number): Promise<Cigarette>{
    return this.cigaretteService.getCigaretteById(req.user.id ,cigaretteId);
  }
}
