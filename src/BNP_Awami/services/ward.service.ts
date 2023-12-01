import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WardRepository } from '../repositories/ward.repository';
import { WardEntity } from '../entities/ward.entity';
import { WardDto } from '../dtoFiles/ward.dto';
import { UcEntity } from '../entities/uc.entity';

@Injectable()
export class WardService {
  constructor(
    @InjectRepository(WardRepository)
    private wardRepository: WardRepository,
  ) {}

  async createNewWard(ward: WardDto, uc: UcEntity): Promise<WardEntity> {
    return await this.wardRepository.createNewWard(ward, uc);
  }

  async selectWard(id: number): Promise<WardEntity> {
    return await this.wardRepository.selectWard(id);
  }
}
