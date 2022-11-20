import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Body, Delete, HttpCode, Patch, Post } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Cigarette } from '@prisma/client';
import { Request } from 'express';
import { CigaretteService } from './cigarette.service';
import { CreateCigaretteDto } from './dto/create-cigarette.dto';
import { UpdateCigaretteDto } from './dto/update-cigarette';

@UseGuards(AuthGuard('jwt'))
@Controller('cigarette')
export class CigaretteController {
  constructor(private readonly cigaretteService: CigaretteService) {}

  @Get()
  getCigarettes(@Req() req: Request): Promise<Cigarette[]> {
    return this.cigaretteService.getCigarettes(req.user.id);
  }

  @Get(':id')
  getCigaretteById(
    @Req() req: Request,
    @Param('id', ParseIntPipe) cigaretteId: number,
  ): Promise<Cigarette> {
    return this.cigaretteService.getCigaretteById(req.user.id, cigaretteId);
  }

  @Post()
  createCigarette(
    @Req() req: Request,
    @Body() dto: CreateCigaretteDto,
  ): Promise<Cigarette> {
    return this.cigaretteService.createCigarette(req.user.id, dto);
  }

  @Patch(':id')
  updateCigaretteById(
    @Req() req: Request,
    @Param('id', ParseIntPipe) cigaretteId: number,
    @Body() dto: UpdateCigaretteDto,
  ) {
    return this.cigaretteService.updateCigaretteById(
      req.user.id,
      cigaretteId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteCigaretteById(
    @Req() req: Request,
    @Param('id', ParseIntPipe) cigaretteId: number,
  ) {
    return this.cigaretteService.deleteCigaretteById(req.user.id, cigaretteId);
  }
}
