import { Module } from '@nestjs/common';
import { GitlabModule } from './gitlab/gitlab.module';
import { TestModule } from './test/test.module';
import { TestService } from 'src/test/test.service';
import { GitlabService } from 'src/gitlab/gitlab.service';
import { GitlabController } from 'src/gitlab/gitlab.controller';
import { TestController } from 'src/test/test.controller';
import { GitlabV4Sdk } from 'src/gitlab-sdk/gitlab-v4-sdk.service';
import { GitlabV4SdkModule } from 'src/gitlab-sdk/gitlab-v4-sdk.module';

@Module({
  imports: [GitlabModule, TestModule, GitlabV4SdkModule],
  controllers: [GitlabController, TestController],
  providers: [TestService, GitlabService, GitlabV4Sdk],
})
export class AppModule {}
