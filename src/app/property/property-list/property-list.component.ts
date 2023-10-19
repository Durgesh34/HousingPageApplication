import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  
  properties :IProperty[]=[];
  public SellRent =1;

  constructor(private housingService:HousingService, private route:ActivatedRoute){}

  ngOnInit(): void {
  //  use Subscribe( ) method for the obervable;
      if(this.route.snapshot.url.toString())
      {
        this.SellRent=2;
      }
     this.housingService.getAllProperties(this.SellRent).subscribe
     (
      (data)=>
      {
        this.properties=data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
      },error=>
      {
        console.log('httperror:');
        console.log(error);
      }
     )
 
  }

 
      
}





