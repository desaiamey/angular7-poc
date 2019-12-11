import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APIConfig } from '../../shared/app.constant';

// import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class SearchService {
    constructor(private http: HttpClient) {
    }

    search(name: string) {
        return this.http.get<any>(`${APIConfig.API_URL}/employees`,
         {params: {name_like: name}})
            .pipe(map(user => {
                    return user;
            }));
    }
}
