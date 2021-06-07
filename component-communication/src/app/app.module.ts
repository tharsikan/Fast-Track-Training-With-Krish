import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './home/button/button.component';
import { InputComponent } from './home/input/input.component';
import { LabelComponent } from './home/label/label.component';
import { FormsModule } from '@angular/forms';
import { Home2Component } from './home2/home2.component';
import { Input2Component } from './home2/input2/input2.component';
import { Button2Component } from './home2/button2/button2.component';
import { Label2Component } from './home2/label2/label2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    Home2Component,
    Input2Component,
    Button2Component,
    Label2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
