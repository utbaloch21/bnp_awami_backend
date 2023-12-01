import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UnitMemberDto {
  id: number;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsString()
  fullName: string;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsString()
  fathersName: string;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsString()
  cnic_No: string;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsString()
  voterListNo: string;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsString()
  wardNo: string;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsString()
  phoneNumber: string;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsNumber()
  unitId: number;
}
