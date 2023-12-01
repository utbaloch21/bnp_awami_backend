import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { WardEntity } from './ward.entity';

@Entity('union_counsel')
export class UcEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  ucName: string;

  @OneToMany(() => WardEntity, (ward) => ward.uc)
  wards: WardEntity[];
}
