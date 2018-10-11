import { MyHighlighter, MyIf } from "./../assets/mydirectives";
import { CountryDataService } from './service/country-data.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule, FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";

import { AppRouting, routingComponents } from "./app.routing";

import { DataService } from "./service/data.service";
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';
import { TruncatePipe, FetchPipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, routingComponents, TruncatePipe, FetchPipe ,MyHighlighter,MyIf ],

  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRouting, HttpClientModule, ],

  providers: [DataService, CountryDataService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
