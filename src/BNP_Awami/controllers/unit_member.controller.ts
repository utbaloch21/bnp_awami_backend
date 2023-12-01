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
import { UnitMemberService } from '../services/unit_member.service';
import { UnitMemberEntity } from '../entities/unit_member.entity';
import { UnitMemberDto } from '../dtoFiles/unit_member.dto';
import { UnitService } from '../services/unit.service';

@Controller('unit_member')
export class UnitMemberController {
  constructor(
    private unit_memberService: UnitMemberService,
    private unitService: UnitService,
  ) {}
  @Get(':id')
  selectUnitMember(@Param('id') id: string): Promise<UnitMemberEntity> {
    return this.unit_memberService.selectUnitMember(+id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  async createUnitMember(
    @Body() unit_member: UnitMemberDto,
  ): Promise<UnitMemberEntity> {
    const unit = await this.unitService.selectUnit(unit_member.unitId);
    return await this.unit_memberService.createNewUnitMember(unit_member, unit);
  }
}
