import { Component } from "@angular/core";

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

    Property : any ={

        "Id":1,
        "Type":"House",
        "Price":12000,
        "Name":"Birla House"
    }

}