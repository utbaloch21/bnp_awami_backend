import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { WardEntity } from '../entities/ward.entity';
import { WardDto } from '../dtoFiles/ward.dto';
import { UcEntity } from '../entities/uc.entity';

@Injectable()
export class WardRepository extends Repository<WardEntity> {
  constructor(private dataSource: DataSource) {
    super(WardEntity, dataSource.createEntityManager());
  }

  async selectWard(id: number): Promise<WardEntity> {
    try {
      const selectedWard = await this.createQueryBuilder('ward')
        .where('ward.id = :id', { id })
        .leftJoinAndSelect('ward.units', 'unit')
        .getOne();
      return selectedWard;
    } catch (error) {
      return error;
    }
  }

  async createNewWard(ward: WardDto, uc: UcEntity): Promise<WardEntity> {
    try {
      const newWard = await this.save({
        wardName: ward.wardName,
      });

      uc.wards = [...uc.wards, newWard];
      await uc.save();
      return newWard;
    } catch (error) {
      return error;
    }
  }
}
