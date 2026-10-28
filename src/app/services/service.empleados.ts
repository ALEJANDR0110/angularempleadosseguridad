import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceEmpleados {
    url = environment.urlApiEmpleados;

    constructor(
        private _http: HttpClient
    ) {

    }

    async getLogin(user: Object): Promise<string> {
        let request = "auth/login"
        return firstValueFrom(this._http.post<string>(this.url + request, user))
    }
}