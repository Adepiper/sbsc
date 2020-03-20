import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { RectangleOneComponent } from './components/rectangle-one/rectangle-one.component';
import { RectangleTwoComponent } from './components/rectangle-two/rectangle-two.component';
import { RectangleThreeComponent } from './components/rectangle-three/rectangle-three.component';
import { RectangleFourComponent } from './components/rectangle-four/rectangle-four.component';
import { RectangleFiveComponent } from './components/rectangle-five/rectangle-five.component';
import { RectangleSixComponent } from './components/rectangle-six/rectangle-six.component';
import { RectangleSevenComponent } from './components/rectangle-seven/rectangle-seven.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    HeaderComponent,
    RectangleOneComponent,
    RectangleTwoComponent,
    RectangleThreeComponent,
    RectangleFourComponent,
    RectangleFiveComponent,
    RectangleSixComponent,
    RectangleSevenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
