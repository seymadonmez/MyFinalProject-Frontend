import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginModel } from "../models/loginModel";
import { SingleResponseModel } from "../models/singleResponseModel";
import { TokenModel } from "../models/tokenmodel";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiUrl = "https://localhost:44393/api/auth/";

  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel);//datam tokenModel, response'um success ve message bilgisini de içerecek
  }


  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

}
