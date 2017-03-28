import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { editComponent } from './recipe-detail';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule
  ],
  declarations: [AppComponent, editComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
