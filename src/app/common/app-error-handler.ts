import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";


export class AppErrorHandler implements ErrorHandler {
  handleError(error: HttpErrorResponse) {
    alert('An unexpected error occurred!!!');
    console.log(error);
  }
}