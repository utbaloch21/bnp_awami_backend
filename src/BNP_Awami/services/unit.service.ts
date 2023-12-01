import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitRepository } from '../repositories/unit.repository';
import { UnitEntity } from '../entities/unit.entity';
import { UnitDto } from '../dtoFiles/unit.dto';
import { WardEntity } from '../entities/ward.entity';

@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(UnitRepository)
    private unitRepository: UnitRepository,
  ) {}

  async createNewUnit(unit: UnitDto, ward: WardEntity): Promise<UnitEntity> {
    return await this.unitRepository.createNewUnit(unit, ward);
  }

  async selectUnit(id: number): Promise<UnitEntity> {
    return await this.unitRepository.selectUnit(id);
  }
}
