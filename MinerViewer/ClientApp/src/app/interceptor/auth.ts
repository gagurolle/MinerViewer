import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = "1eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2MzdFMDVFMEEzRUNENERGNjRGNkE5NUIzMDZDRTBFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NjA2NzI3NDUsImV4cCI6MTY2MDY3NjM0NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzExNiIsImF1ZCI6ImNvbXBhbnlBcGkiLCJjbGllbnRfaWQiOiJjb21wYW55LWVtcGxveWVlIiwic3ViIjoiYTllYTBmMjUtYjk2NC00MDlmLWJjY2UtYzkyMzI2NjI0OWI0IiwiYXV0aF90aW1lIjoxNjYwNjcyNzQ1LCJpZHAiOiJsb2NhbCIsImp0aSI6IjI0NUIwRUUyRUNEQkM4QzhCMUVGMDhDMkVBMTcyNDg3IiwiaWF0IjoxNjYwNjcyNzQ1LCJzY29wZSI6WyJjb21wYW55QXBpIiwib3BlbmlkIl0sImFtciI6WyJwd2QiXX0.Va6zO7y9jSir1gNSS0jF_767hAF6oOOUyClyWC_CUfKOr2StIRYfebkWUxeeBUUIZtH_FPZOgPi6Wvhi6dRWO-t4hFD1RcwWVn_MQVRrMIq5gnH4c5e7kL3AFPcEC2XcBUMiffGpKHJ6VPq1ttaspUPq104uRZFywxHLPF8i4UNGNNG5JcgrCYnNzMHehnsQIQ8CQRZDwhXumCTjofX8LACS6rxHIMA1R1ePnwOdUfStQWmZ8xOG_9lGUvWlNKAxkjgMv_FZFu_Pd21hrL9amyly6ODem_3pm9XrSY-xJGwCWxc0-DjRyLAG0GdMR762F8IHOUMWQseQbwv8130elA";

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}