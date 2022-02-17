import { Injectable } from '@nestjs/common';
import { FindProjectsDto } from 'src/gitlab/dto/find-projects.dto';
import { GitlabV4Sdk } from 'src/gitlab-sdk/gitlab-v4-sdk.service';
import { ProjectDto } from 'src/gitlab-sdk/dto/project.dto';

@Injectable()
export class GitlabService {
  constructor(private readonly gitlabSdk: GitlabV4Sdk) {}

  public async findProjects({ user }: FindProjectsDto): Promise<ProjectDto[]> {
    const { id } = await this.gitlabSdk.findUser({ username: user });
    console.log('id', id);
    return this.gitlabSdk.findProjects(id);
  }
}
