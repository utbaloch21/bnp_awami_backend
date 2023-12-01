import { Module } from '@nestjs/common';
import { UnitMemberEntity } from './entities/unit_member.entity';
import { UnitMemberController } from './controllers/unit_member.controller';
import { UnitMemberService } from './services/unit_member.service';
import { UnitMemberRepository } from './repositories/unit_member.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UcEntity } from './entities/uc.entity';
import { UcController } from './controllers/uc.controller';
import { UcService } from './services/uc.service';
import { UcRepository } from './repositories/uc.repository';
import { WardEntity } from './entities/ward.entity';
import { UnitEntity } from './entities/unit.entity';
import { WardController } from './controllers/ward.controller';
import { UnitController } from './controllers/unit.controller';
import { UnitService } from './services/unit.service';
import { UnitRepository } from './repositories/unit.repository';
import { WardService } from './services/ward.service';
import { WardRepository } from './repositories/ward.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UnitMemberEntity,
      UcEntity,
      WardEntity,
      UnitEntity,
    ]),
  ],
  controllers: [
    UnitMemberController,
    UcController,
    WardController,
    UnitController,
  ],
  providers: [
    UnitMemberService,
    UnitMemberRepository,
    UcService,
    UcRepository,
    UnitService,
    UnitRepository,
    WardService,
    WardRepository,
  ],
})
export class BNP_AwamiModule {}
