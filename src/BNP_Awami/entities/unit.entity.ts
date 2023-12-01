import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { WardEntity } from './ward.entity';
import { UnitMemberEntity } from './unit_member.entity';

@Entity('unit')
export class UnitEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  unitName: string;

  @ManyToOne(() => WardEntity, (ward) => ward.units)
  ward: WardEntity;

  @OneToMany(() => UnitMemberEntity, (unitMember) => unitMember.unit)
  unitMembers: UnitMemberEntity[];
}
