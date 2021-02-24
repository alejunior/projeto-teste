import { Injectable } from "@angular/core";
import { AngularTokenService } from "angular-token";
import { User } from "./user.model";

@Injectable()
export class AuthService {

  public constructor(
    private tokenService:AngularTokenService
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