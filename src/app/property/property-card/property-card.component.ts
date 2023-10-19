import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

// decorator in form of object {};
@Component(
    {
        selector: 'app-property-card',
        // provides html code;
        // template: '<h1>I am a card<h1>',
        templateUrl:'property-card.component.html',
        // provides css for component;
        // styles: [ 'h1 {font-weight:normal;}']
        styleUrls:['property-card.component.css']

    }
)
// class Name must be in pascal case
export class PropertyCardComponent{

   @Input() property:IProperty;
   constructor() {
    this.property = {
        Id: 0,
        Price: 0,
        Name: '',
        Type: '',
        SellRent:0,
        
    };

}
}