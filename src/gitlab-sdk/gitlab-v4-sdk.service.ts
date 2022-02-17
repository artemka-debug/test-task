import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  BaseRequestOptions,
  FindProjectsOptions,
  FindUserOptions,
} from 'src/gitlab-sdk/types';
import axios, { AxiosInstance } from 'axios';
import { plainToInstance } from 'class-transformer';
import { UserDto } from 'src/gitlab-sdk/dto/user.dto';
import * as querystring from 'querystring';
import { ProjectDto } from 'src/gitlab-sdk/dto/project.dto';
import { gitlabToken } from 'src/config';

@Injectable()
export class GitlabV4Sdk {
  private readonly apiV4: AxiosInstance;

  constructor() {
    this.apiV4 = axios.create({
      baseURL: 'https://gitlab.com/api/v4',
      headers: {
        Authorization: `Bearer ${gitlabToken}`,
      },
    });
    this.apiV4.interceptors.request.use((config) => {
      console.log(config);
      return config;
    });
  }

  public findProjects(
    userId: string,
    options?: FindProjectsOptions,
  ): Promise<ProjectDto[]> {
    return this.baseRequest({
      path: `/users/${userId}/projects`,
      method: 'get',
      dto: ProjectDto,
      options: {
        params: options,
      },
    });
  }

  public async findUser(options: FindUserOptions): Promise<UserDto> {
    const [user] = await this.baseRequest<UserDto>({
      path: '/users',
      method: 'get',
      dto: UserDto,
      options: {
        params: options,
      },
    });

    if (!user) {
      throw new NotFoundException(
        `Could not find user by params - [${querystring.stringify(options)}]`,
      );
    }

    return user;
  }

  private async baseRequest<T>({
    path,
    method,
    options,
    dto,
  }: BaseRequestOptions): Promise<T[]> {
    const { data } = await this.apiV4[method](path, options);
    console.log(path, data);
    return plainToInstance<T, any[]>(dto, data, {
      excludeExtraneousValues: true,
    });
  }
}
