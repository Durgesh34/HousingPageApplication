import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';
import {User} from 'src/app/model/user';

import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  registerationForm:FormGroup | any;
  user:User | undefined;
  userSubmitted:boolean=true;
  constructor(private userService:UserServiceService,private alertify:AlertifyService ){}

  ngOnInit() {

    this.registerationForm= new FormGroup(
      {
            userName: new FormControl(null,Validators.required),
            email: new FormControl(null,[Validators.required, Validators.email]),
            password : new FormControl(null, [Validators.required,Validators.minLength(8)]),
           mobile : new FormControl(null, [Validators.required,Validators.pattern(/^[0-9]{10}$/),Validators.maxLength(10),Validators.minLength(10)]),
           confirmpassword : new FormControl(null, [Validators.required]),

            
      },this.passwordMatchingValidator
    );

  }
    // Reactive  Forms Has 2 Validators 1> custom type Validators  2> Cross Function Type Validators

   passwordMatchingValidator(fg:FormGroup|any):Validators|null
    {
          return fg.get('password').value===fg.get('confirmpassword').value?null:{notmatched:true};
    }
    
  get userName()
  {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email()
  {
    return this.registerationForm.get('email') as FormControl;
  }
  get password()
  {
    return this.registerationForm.get('password') as FormControl;
  }
  get mobile()
  {
    return this.registerationForm.get('mobile') as FormControl;
  }
  get confirmpassword()
  {
    return this.registerationForm.get('confirmpassword') as FormControl;
  }



  onSubmit() {
    console.log(this.registerationForm.value);
    this.userSubmitted = true;
  
    if (this.registerationForm.valid) {
      this.user = this.userdata(); // Assign user data to this.user
  
      // Retrieve existing users from local storage
      let users: User[] = JSON.parse(localStorage.getItem('Users') || '[]');
  
      // Push the new user data into the array
      users.push(this.user);
  
      // Store the updated array back in local storage
      localStorage.setItem('Users', JSON.stringify(users));
  
      this.registerationForm.reset();
      this.userSubmitted = false;

      this.alertify.success("Congrats,Registered successfully!")
    }
    else{
      this.alertify.error("Kindly Provide Valid Details ");
      
    }
  }
  
  
  

   userdata():User 
   {

    return this.user=
    {
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value

    }
   }


}
