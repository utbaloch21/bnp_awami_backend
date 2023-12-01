import {
  Controller,
  Get,
  ValidationPipe,
  Post,
  UsePipes,
  HttpCode,
  Body,
  Param,
} from '@nestjs/common';
import { WardService } from '../services/ward.service';
import { WardEntity } from '../entities/ward.entity';
import { WardDto } from '../dtoFiles/ward.dto';
import { UcService } from '../services/uc.service';

@Controller('ward')
export class WardController {
  constructor(
    private wardService: WardService,
    private ucService: UcService,
  ) {}
  @Get(':id')
  selectWard(@Param('id') id: string): Promise<WardEntity> {
    return this.wardService.selectWard(+id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  async createWard(@Body() ward: WardDto): Promise<WardEntity> {
    const uc = await this.ucService.selectUc(ward.ucId);
    return await this.wardService.createNewWard(ward, uc);
  }
}
