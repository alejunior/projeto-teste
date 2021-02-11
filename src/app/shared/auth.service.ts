import { Injectable } from "@angular/core";
import { Angular2TokenService } from "angular2-token";
import { User } from "./user.model";

@Injectable()
export class AuthService {

  public constructor(
    private tokenService:Angular2TokenService
  ){ }

  public signUp(user: User){

  }

  public signIn(userId: number, password: string){

  }

  public signOut(){

  }

  public isSignedIn(){

  }

  
}