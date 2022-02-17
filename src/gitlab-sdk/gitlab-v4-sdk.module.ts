import { Module } from '@nestjs/common';
import { GitlabV4Sdk } from 'src/gitlab-sdk/gitlab-v4-sdk.service';

@Module({
  imports: [GitlabV4Sdk],
  exports: [GitlabV4Sdk],
})
export class GitlabV4SdkModule {}
