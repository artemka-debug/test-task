import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  public ping() {
    return { data: 'pong' };
  }
}
