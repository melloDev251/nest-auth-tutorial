import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(userId: number): string {
    // const user = await this.userRepository.findOne({
    //   where: {
    //     id: userId,
    //   },
    // });
    return 'Hello World!';
  }
}
