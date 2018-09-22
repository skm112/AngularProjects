import { Component, OnInit } from "@angular/core";
import { Country } from "../common/model/country";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"]
})
export class CountryComponent implements OnInit {
  countryObj: Country;
  arrCountry: Country[];
  id: number = 0;

  constructor(private router: Router) {
    this.countryObj = new Country();
    this.arrCountry = [];
  }

  saveUpdate() {
    if (this.countryObj.id > 0) {
      for (let i = 0; i < this.arrCountry.length; i++) {
        if (this.arrCountry[i].id == this.countryObj.id) {
          this.arrCountry[i] = this.countryObj.copy();
          console.log(this.arrCountry);
        }
      }
    } else {
      console.log(this.countryObj);
      this.countryObj.id = ++this.id;
      console.log(this.arrCountry);
      this.arrCountry.push(this.countryObj.copy());
    }
    this.cancel();
  }
  edit(obj) {
    this.countryObj = obj.copy();
    console.log(this.arrCountry);
  }

  delete(val) {
    for (let i = 0; i < this.arrCountry.length; i++) {
      if (this.arrCountry[i] == val) {
        this.arrCountry.splice(i, 1);
      }
    }
    this.cancel();
  }
  cancel() {
    this.countryObj.clear();
  }

  

  ngOnInit() {}
}
