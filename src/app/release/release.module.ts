import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReleaseRegisterComponent } from './release-register/release-register.component';
import { ReleaseSearchComponent } from './release-search/release-search.component';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,

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
  declarations: [ReleaseRegisterComponent, ReleaseSearchComponent],
  exports: [ReleaseRegisterComponent, ReleaseSearchComponent]
})
export class ReleaseModule { }
