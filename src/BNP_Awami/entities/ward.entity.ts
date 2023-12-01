import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UcEntity } from './uc.entity';
import { UnitEntity } from './unit.entity';

@Entity('ward')
export class WardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  wardName: string;

  @ManyToOne(() => UcEntity, (uc) => uc.wards)
  uc: UcEntity;

  @OneToMany(() => UnitEntity, (unit) => unit.ward)
  units: UnitEntity[];
}
