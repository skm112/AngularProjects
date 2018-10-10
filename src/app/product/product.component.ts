import { ProductService } from "./../service/product.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  _file = new File([""], "");
  arrTable:any[]=[];
  link:string="";

  constructor(
    private ProductService: ProductService,
    private builder: FormBuilder
  ) {
    this.getData();
  }


  filename = new FormControl(null);
  name = new FormControl(null);
  price = new FormControl(null);
  uploadForm: FormGroup = this.builder.group({
    filename: this.filename,
    name:this.name,
    price:this.price
  });
  fileChange(event) {
    this._file = event.target.files[0];
  }

  save() {
    const formData = new FormData();
    formData.append("uploads[]", this._file, this._file.name);
    formData.append("name", this.uploadForm.value.name);
    formData.append("price", this.uploadForm.value.price);
    this.ProductService
      .savedata(formData)
      .subscribe(obj => {
        console.log("obj");
        
    console.log(obj);
    this.getData();
    this.uploadForm.reset();
        // this.uploadForm.patchValue(obj)
      });
    
  }

  getData() {
    this.ProductService.getdata().subscribe(data => {
      console.log(data);
      this.arrTable = data;
console.log("arrtable");
console.log(this.arrTable);

    });
  }

  delete(obj) {
    console.log("delete obj");
    console.log(obj);

    this.ProductService.deletedata(obj).subscribe(obj => {
      console.log(obj);
      
      this.getData();
    });
  }

  edit(obj){
    this.uploadForm.patchValue(obj);
    this.link=obj.pic;
  }
  ngOnInit() {}
}
