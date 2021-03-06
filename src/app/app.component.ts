import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showtable:boolean = false;
  options:any=null;
  showCharts:boolean=false;
  showLegend:boolean= true;
  mapSize:string = "100%";

  showComponent(e):void{
    switch (e.command) {
      case "LEGEND":
        this.showLegend = (this.showLegend) ? false : true;
        
        break;
      case "TABLE":
         this.showtable = (this.showtable) ? false : true;
         if(this.showtable) this.mapSize = "66%";
         else{
           this.mapSize = "100%";
         }
        break;
      case "CHARTS":
        this.showCharts = (this.showCharts) ? false : true;
        break;                                         
      default:          
        break;
    }

     
  }

  updateTable(e:boolean):void{
    this.showtable = e;
    this.mapSize = "100%";
  }

  //Control Map Through Options..
  controlMap(e:any):void{
    this.options = e;
  }
  closeLegend(event):void{
      this.showLegend = event;
  }

  showChartsOrHide(event):void{
     this.showCharts = event;
  }
}
