import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit{

  public propertyId :number | undefined ;
  constructor(private route:ActivatedRoute , private router:Router){
    this.propertyId=-1
  }

  
  ngOnInit() {

    const idParam = this.route.snapshot.params['id'];
    if(idParam)
    {
      this.propertyId = Number(idParam);
    }

    this.route.params.subscribe(
      (params)=>
      {
        this.propertyId =+params['id'];
        // the params return value in form of string
        //  u can convert it into number using Number/ + operator;
      }
    )
  }
  onSelectNext()
  {
    if(this.propertyId !== undefined )
    {
  this.propertyId += 1;
    }
       this.router.navigate(['property-detail',this.propertyId]);     
  }
   
}
