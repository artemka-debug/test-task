import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProjectDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;

  @IsString()
  @IsOptional()
  @Expose()
  description: string | null;

  @IsString()
  @Expose({ name: 'web_url' })
  url: string;

  @IsString()
  @Expose({ name: 'readme_url' })
  readmeUrl: string;

  @IsString()
  @Expose({ name: 'http_url_to_repo' })
  gitUrl: string;
}
