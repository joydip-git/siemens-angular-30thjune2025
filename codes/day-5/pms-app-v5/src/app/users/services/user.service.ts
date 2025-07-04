import { Injectable } from '@angular/core';
import { IUserContract } from './userservice.contract';
import { ApiResponse } from '../../models/api-response';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER_API_URL } from '../../config/constants';

@Injectable()
export class UserService implements IUserContract {

  constructor(private http: HttpClient) { }

  authenticate(user: User): Observable<ApiResponse<string>> {

    return this.http.post<ApiResponse<string>>(`${USER_API_URL}/authenticate`, user);

  }

  register(user: User): Observable<ApiResponse<User>> {

    return this.http.post<ApiResponse<User>>(`${USER_API_URL}/register`, user);

  }
}
