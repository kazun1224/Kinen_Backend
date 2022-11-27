import { Body, Controller, Get, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { TotalService } from './total.service';

@UseGuards(AuthGuard('jwt'))
@Controller('total')
export class TotalController {
  constructor(private readonly totalService: TotalService) {}
  @Get()
  getTotal(@Req() req: Request) {
    return this.totalService.getTotal(req.user.id);
  }

  @Post('cigarette')
  totalCalcByOnePack(@Req() req: Request,@Body('cigaretteId', ParseIntPipe) cigaretteId: number) {
    return this.totalService.totalCalcByOnePack(req.user.id, cigaretteId);
  }
  @Post('carton')
  totalCalcByCarton(@Req() req: Request, cigaretteId: number) {
    return this.totalService.totalCalcByCarton(req.user.id, cigaretteId);
  }
}
