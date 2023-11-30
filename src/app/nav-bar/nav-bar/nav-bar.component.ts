import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  loggedUser:any;
  constructor(private router:Router,private alertify:AlertifyService) {}
  loggedin()
  {
    this.loggedUser=localStorage.getItem('token') || null;
    return this.loggedUser;
  }

  onLogout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    this.alertify.success("You are logout succesfully");

  }

  toggleDropdown(dropdownId: string) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
      dropdown.classList.toggle('show');
    }
}

}
