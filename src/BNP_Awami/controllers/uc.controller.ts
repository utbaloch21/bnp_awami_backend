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
import { UcService } from '../services/uc.service';
import { UcEntity } from '../entities/uc.entity';
import { UcDto } from '../dtoFiles/uc.dto';

@Controller('uc')
export class UcController {
  constructor(private ucService: UcService) {}
  @Get(':id')
  selectUc(@Param('id') id: string): Promise<UcEntity> {
    return this.ucService.selectUc(+id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  async createUc(@Body() uc: UcDto): Promise<UcEntity> {
    return await this.ucService.createNewUc(uc);
  }
}
