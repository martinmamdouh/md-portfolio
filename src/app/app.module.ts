
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsCardsComponent } from './projects-cards/projects-cards.component';
import { AboutComponent } from './about/about.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { StackListComponent } from './stack-list/stack-list.component';

// material design.
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsCardsComponent,
    AboutComponent,
    ProfilePicComponent,
    StackListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    //material design
    MatTabsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    