import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((res: any) => this.responseHandler(res, context)))
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp()
    const response = ctx.getResponse()

    if (typeof res !== 'object') {
      throw new HttpException('Response must be an object', 500)
    }
    return {
      status: true,
      result: res
    }
  }
}
