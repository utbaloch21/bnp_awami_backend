import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UnitMemberEntity } from '../entities/unit_member.entity';
import { UnitMemberDto } from '../dtoFiles/unit_member.dto';
import { UnitEntity } from '../entities/unit.entity';

@Injectable()
export class UnitMemberRepository extends Repository<UnitMemberEntity> {
  constructor(private dataSource: DataSource) {
    super(UnitMemberEntity, dataSource.createEntityManager());
  }

  async selectUnitMember(id: number): Promise<UnitMemberEntity> {
    try {
      const selectedUnitMember = await this.createQueryBuilder('unit_member')
        .where('unit_member.id = :id', { id })
        .getOne();
      return selectedUnitMember;
    } catch (error) {
      console.log(error);
    }
  }

  async createNewUnitMember(
    unitMember: UnitMemberDto,
    unit: UnitEntity,
  ): Promise<UnitMemberEntity> {
    try {
      const newUnitMember = await this.save({
        fullName: unitMember.fullName,
        fathersName: unitMember.fathersName,
        cnic_No: unitMember.cnic_No,
        voterListNo: unitMember.voterListNo,
        wardNo: unitMember.wardNo,
        phoneNumber: unitMember.phoneNumber,
      });

      unit.unitMembers = [...unit.unitMembers, newUnitMember];
      await unit.save();

      return newUnitMember;
    } catch (error) {
      console.log(error);
    }
  }
}
