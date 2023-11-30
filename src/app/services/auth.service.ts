import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user:any)
  {
    let Userarray=[];
    if(localStorage.getItem('Users'))
    {
      Userarray=JSON.parse(localStorage.getItem('Users') || '[]');

    }
    return Userarray.find((p: { userName: any; password: any; })=> p.userName===user.userName && p.password === user.password);
  }
}
