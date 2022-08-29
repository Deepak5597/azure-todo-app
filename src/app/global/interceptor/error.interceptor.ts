import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";

export class ErrorInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                retry(1),
                catchError((error:HttpErrorResponse) => {
                    let errorMessage = {};
                    if(error.error instanceof ErrorEvent){
                        errorMessage = {
                            status:"CLIENT_ERROR",
                            statusCode: 500,
                            message: "Client Error Happened"
                        }
                    }else{
                        errorMessage = {
                            status:"CLIENT_ERROR",
                            statusCode: 500,
                            message: "Server Error Happened"
                        }
                    }
                    console.log(error);
                    return throwError(errorMessage);
                })
            )
    }

}