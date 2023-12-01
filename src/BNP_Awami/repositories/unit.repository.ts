import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UnitEntity } from '../entities/unit.entity';
import { UnitDto } from '../dtoFiles/unit.dto';
import { WardEntity } from '../entities/ward.entity';

@Injectable()
export class UnitRepository extends Repository<UnitEntity> {
  constructor(private dataSource: DataSource) {
    super(UnitEntity, dataSource.createEntityManager());
  }

  async selectUnit(id: number): Promise<UnitEntity> {
    try {
      const selectedUnit = await this.createQueryBuilder('unit')
        .where('unit.id = :id', { id })
        .leftJoinAndSelect('unit.unitMembers', 'unitMember')
        .getOne();

      return selectedUnit;
    } catch (error) {
      return error;
    }
  }

  async createNewUnit(unit: UnitDto, ward: WardEntity): Promise<UnitEntity> {
    try {
      const newUnit = await this.save({
        unitName: unit.unitName,
      });

      ward.units = [...ward.units, newUnit];
      await ward.save();
      return newUnit;
    } catch (error) {
      return error;
    }
  }
}
