import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  id: string;
}
