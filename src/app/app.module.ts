import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { ReleaseSearchComponent } from './release-search/release-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReleasePeopleComponent } from './release-people/release-people.component';


@NgModule({
  declarations: [
    AppComponent,
    ReleaseSearchComponent,
    NavbarComponent,
    ReleasePeopleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
