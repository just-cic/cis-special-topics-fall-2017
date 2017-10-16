import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';

import { HallsLookupComponent } from './halls-lookup.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, SharedModule],
    declarations: [HallsLookupComponent]
})
export class MasterDataModule { }