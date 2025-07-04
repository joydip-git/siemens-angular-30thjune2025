import { Observable } from "rxjs";
import { ApiResponse } from "../../models/api-response";
import { User } from "../../models/user";

export interface IUserContract {
    authenticate(user: User): Observable<ApiResponse<string>>;
    register(user: User): Observable<ApiResponse<User>>;
}