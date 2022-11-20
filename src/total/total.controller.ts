import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { TotalService } from './total.service';

@UseGuards(AuthGuard('jwt'))
@Controller('total')
export class TotalController {
  constructor(private readonly totalService: TotalService) {

  }
  @Get()
  getTotal(@Req() req:Request) {
    return this.totalService.getTotal(req.user.id);
  }
}
