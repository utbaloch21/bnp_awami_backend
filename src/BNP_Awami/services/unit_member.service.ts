import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitMemberRepository } from '../repositories/unit_member.repository';
import { UnitMemberDto } from '../dtoFiles/unit_member.dto';
import { UnitMemberEntity } from '../entities/unit_member.entity';
import { UnitEntity } from '../entities/unit.entity';

@Injectable()
export class UnitMemberService {
  constructor(
    @InjectRepository(UnitMemberRepository)
    private unit_memberRepository: UnitMemberRepository,
  ) {}

  async createNewUnitMember(
    unit_member: UnitMemberDto,
    unit: UnitEntity,
  ): Promise<UnitMemberEntity> {
    return await this.unit_memberRepository.createNewUnitMember(
      unit_member,
      unit,
    );
  }

  async selectUnitMember(id: number): Promise<UnitMemberEntity> {
    return await this.unit_memberRepository.selectUnitMember(id);
  }
}
