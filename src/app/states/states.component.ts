import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-states",
  templateUrl: "./states.component.html",
  styleUrls: ["./states.component.css"]
})
export class StatesComponent implements OnInit {
  public id:number;
  public country:string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.country = params["name"];
      console.log(params);
      console.log(params["name"]);
    });
  }

  ngOnInit() {
    
    
    
  }
}
