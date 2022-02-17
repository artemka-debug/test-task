import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { GitlabService } from './gitlab.service';
import { FindProjectsDto } from 'src/gitlab/dto/find-projects.dto';

@Controller('gitlab')
export class GitlabController {
  constructor(private readonly gitlabService: GitlabService) {}

  @Get('/projects')
  findProjectByUser(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    query: FindProjectsDto,
  ) {
    return this.gitlabService.findProjects(query);
  }
}
