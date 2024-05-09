import { Controller, Get, Param } from '@nestjs/common'
// biome-ignore lint/style/useImportType: <explanation>
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/movie/:name')
  getMovie(@Param('name') name: string): string {
    return this.appService.getMovie(name)
  }
}
