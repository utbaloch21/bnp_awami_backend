import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UcRepository } from '../repositories/uc.repository';
import { UcDto } from '../dtoFiles/uc.dto';
import { UcEntity } from '../entities/uc.entity';

@Injectable()
export class UcService {
  constructor(
    @InjectRepository(UcRepository)
    private ucRepository: UcRepository,
  ) {}

  async createNewUc(uc: UcDto): Promise<UcEntity> {
    return await this.ucRepository.createNewUc(uc);
  }

  async selectUc(id: number): Promise<UcEntity> {
    return await this.ucRepository.selectUc(id);
  }
}
