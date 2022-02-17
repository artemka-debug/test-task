import { AxiosRequestConfig } from 'axios';
import { ClassConstructor } from 'class-transformer';

export type FindProjectsOptions = {
  archived?: boolean;
};
export type FindUserOptions = {
  username: string;
};
export type BaseRequestOptions = {
  method: 'get' | 'post' | 'delete' | 'put';
  path: string;
  dto: ClassConstructor<any>;
  options?: AxiosRequestConfig;
};
