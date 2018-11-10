import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ReleaseSearchComponent } from './release-search/release-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReleasePeopleComponent } from './release-people/release-people.component';
import { ReleaseRegisterComponent } from './release-register/release-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleaseSearchComponent,
    NavbarComponent,
    ReleasePeopleComponent,
    ReleaseRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
