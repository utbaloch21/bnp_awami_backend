import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UcEntity } from '../entities/uc.entity';
import { UcDto } from '../dtoFiles/uc.dto';

@Injectable()
export class UcRepository extends Repository<UcEntity> {
  constructor(private dataSource: DataSource) {
    super(UcEntity, dataSource.createEntityManager());
  }

  async selectUc(id: number): Promise<UcEntity> {
    try {
      const selectedUc = await this.createQueryBuilder('union_counsel')
        .where('union_counsel.id = :id', { id })
        .leftJoinAndSelect('union_counsel.wards', 'ward')
        .getOne();

      return selectedUc;
    } catch (error) {
      return error;
    }
  }

  async createNewUc(uc: UcDto): Promise<UcEntity> {
    try {
      const newUc = await this.save({
        ucName: uc.ucName,
      });

      return newUc;
    } catch (error) {
      return error;
    }
  }
}
