import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "demo";

  name: string;
  students: string[];

  constructor() {
    this.name="skm";
    this.students=[];
  }

  clickMe() {
    this.students.push(this.name);
    console.log(this.students);
  }
}
