import { IsNotEmpty, IsString } from 'class-validator';

export class FindProjectsDto {
  @IsString()
  @IsNotEmpty()
  user: string;
}
