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
import { UnitService } from '../services/unit.service';
import { UnitEntity } from '../entities/unit.entity';
import { UnitDto } from '../dtoFiles/unit.dto';
import { WardService } from '../services/ward.service';

@Controller('unit')
export class UnitController {
  constructor(
    private unitService: UnitService,
    private wardService: WardService,
  ) {}
  @Get(':id')
  selectUnit(@Param('id') id: string): Promise<UnitEntity> {
    return this.unitService.selectUnit(+id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  async createUnit(@Body() unit: UnitDto): Promise<UnitEntity> {
    const ward = await this.wardService.selectWard(unit.wardId);

    return await this.unitService.createNewUnit(unit, ward);
  }
}
