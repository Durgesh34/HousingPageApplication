import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit{
 @ViewChild('Form') addPropertyForm?:NgForm;
 @ViewChild('formTabs') formTabs?: TabsetComponent;
 propertyTypes:Array<string>=['House','Apartment','Duplex']
 furnishTypes:Array<string>=['Fully','Semi','Unfurnished']

  propertyview:IProperty= {
    SellRent: 0,
    Price: 0,
    Name: '',
    Type: ''
  }


  constructor( private route:Router)
  {}
 
  ngOnInit() {
  }
  
  onBack()
  {
    this.route.navigate(['/']);
  }

  OnSubmit(Form:NgForm)
  {
    console.log(this.addPropertyForm);
  }
  
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
