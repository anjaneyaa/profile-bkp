import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  private scrollingValue: string = "";

  scrollToSection(value: string){
    //console.log("You clicked on", value);
    //this.scrollingValue = value;
  }

  
}
