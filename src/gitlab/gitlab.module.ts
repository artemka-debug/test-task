import { Module } from '@nestjs/common';
import { GitlabService } from './gitlab.service';
import { GitlabController } from './gitlab.controller';
import { GitlabV4SdkModule } from 'src/gitlab-sdk/gitlab-v4-sdk.module';
import { GitlabV4Sdk } from 'src/gitlab-sdk/gitlab-v4-sdk.service';

@Module({
  imports: [GitlabV4SdkModule],
  controllers: [GitlabController],
  providers: [GitlabService, GitlabV4Sdk],
})
export class GitlabModule {}
