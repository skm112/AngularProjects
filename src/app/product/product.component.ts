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

  constructor(
    private ProductService: ProductService,
    private builder: FormBuilder
  ) {}
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
    console.log(formData);

    this.ProductService
      .savedata(formData)
      .subscribe(obj => {
  console.log(obj);
  
      });
    
  }
  ngOnInit() {}
}
