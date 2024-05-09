import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  getMovie(name: string): any {
    return {
      title: 'pega'
    }
  }
}
