import { HttpResponse } from '../../http'
import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NestInterceptor
} from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((res: any) => this.responseHandler(res, context)),
      catchError((err: HttpException) => throwError(() => this.errorHandler(err, context)))
    )
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp()

    if (res && typeof res !== 'object') {
      throw new HttpException('Response must be an object', 500)
    }

    return new HttpResponse(res).build()
  }

  errorHandler(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()

    Logger.error(`${request.method} ${request.url}`, exception.stack, 'ResponseInterceptor')

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

    if (exception['response']) {
      response.status(200).json(new HttpResponse(undefined, status, undefined, exception['response'].message).build())
    } else {
      response.status(200).json(new HttpResponse(undefined, status, undefined, exception.message).build())
    }
  }
}
