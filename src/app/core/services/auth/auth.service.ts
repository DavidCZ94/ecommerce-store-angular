import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private af: AngularFireAuth,
    private httpClient: HttpClient,
    private token: TokenService
  ) { }

  createUser(email: string, password: string){
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loging(email: string, password: string){
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.af.signOut();
  }

  hasUser(){
    return this.af.authState;
  }

  loginRestIpi(email: string, password: string){
    return this.httpClient.post('https://platzi-store.herokuapp.com/auth', {
      email,
      password
    })
    .pipe(
      tap((data: {token: string}) => {
        const token = data.token;
        this.token.saveToken(token);
      })
    );
  }

}
