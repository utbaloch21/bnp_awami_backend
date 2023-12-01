import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { UnitEntity } from './unit.entity';

@Entity('unit_members')
export class UnitMemberEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  fathersName: string;

  @Column({ unique: true })
  cnic_No: string;

  @Column()
  voterListNo: string;

  @Column()
  wardNo: string;

  @Column()
  phoneNumber: string;

  @ManyToOne(() => UnitEntity, (unit) => unit.unitMembers)
  unit: UnitEntity;
}
