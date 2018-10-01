import { CountryDataService } from "./../service/country-data.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Country } from "../common/model/country";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"]
})
export class CountryComponent implements OnInit {
  countryObj: Country;
  arrCountry: Country[];
  id: any;
  arrPage: any[]=[];
  Datalength: number;
  
 pageno:number=1;
 pagesize:number=5;

  constructor(
    private countrydbservice: CountryDataService,
    private router: Router
  ) {
    this.countryObj = new Country();
    this.arrCountry = [];
    this.pagearray();
    this.getData(this.pageno,this.pagesize);
  }

  getData(_pno,_psize) {
    console.log(_pno + '   ' + _psize);
    let obj={limit:_psize,pageno:_pno}
    this.countrydbservice.pagedata(obj).subscribe(data => {
      
      this.arrCountry = data;
      // this.arrCountry = data;
    });
  }

  save() {
    this.countrydbservice
      .savedata({ name: this.countryObj.name })
      .subscribe(obj => {
        
        this.getData(this.pageno, this.pagesize);
      });
  }
  pagearray() {
    //console.log('pagearray');
        
    this.countrydbservice.getdata().subscribe(data => {
     // console.log("data");
     // console.log(data);
      this.Datalength = data;
    let totalpages = this.Datalength/this.pagesize;
      if ((this.Datalength % this.pagesize) > 0)
        totalpages++;

      for (let i = 1; i <= totalpages; i++) {
        this.arrPage.push(i);
      }

    });

    
    // this.countrydbservice.(this.arrPage).subscribe(obj => {
    //   console.log(obj);
    // });
  }

  edit(obj: Country) {
    console.log(obj);

    this.countryObj.name = obj.name;
    this.countryObj._id = obj._id;
    console.log(this.arrCountry);
  }
  Update() {
    console.log(this.countryObj);
    this.countrydbservice.updatedata(this.countryObj).subscribe(obj => {
      console.log(obj);
      this.getData(this.pageno, this.pagesize);
    });
  }
  delete(obj) {
    console.log("delete obj");
    console.log(obj);

    this.countrydbservice.deletedata(obj).subscribe(obj => {
      console.log(obj);
      this.getData(this.pageno, this.pagesize);
    });
  }

  ngOnInit() {}
}
// countryObj: Country;
// arrCountry: Country[];
// id: number = 0;

// constructor(private router: Router) {
//   this.countryObj = new Country();
//   this.arrCountry = [];
// }
// saveUpdate() {
//   if (this.countryObj.id > 0) {
//     for (let i = 0; i < this.arrCountry.length; i++) {
//       if (this.arrCountry[i].id == this.countryObj.id) {
//         this.arrCountry[i] = this.countryObj.copy();
//         console.log(this.arrCountry);
//       }
//     }
//   } else {
//     console.log(this.countryObj);
//     this.countryObj.id = ++this.id;
//     console.log(this.arrCountry);
//     this.arrCountry.push(this.countryObj.copy());
//   }
//   this.cancel();
// }
// edit(obj) {
//   this.countryObj = obj.copy();
//   console.log(this.arrCountry);
// }

// delete(val) {
//   for (let i = 0; i < this.arrCountry.length; i++) {
//     if (this.arrCountry[i] == val) {
//       this.arrCountry.splice(i, 1);
//     }
//   }
//   this.cancel();
// }
// cancel() {
//   this.countryObj.clear();
// }
