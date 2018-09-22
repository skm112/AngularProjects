import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule, FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";

import { AppRouting, routingComponents } from "./app.routing";

import { DataService } from "./service/data.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, routingComponents, ],

  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRouting, HttpClientModule],

  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
