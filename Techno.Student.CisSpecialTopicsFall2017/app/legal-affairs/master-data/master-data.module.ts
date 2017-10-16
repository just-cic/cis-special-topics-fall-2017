import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';

import { CasePartiesLookupComponent } from './case-parties-lookup.component';
import { CourtsLookupComponent } from './courts-lookup.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, SharedModule],
    declarations: [CasePartiesLookupComponent, CourtsLookupComponent]
})
export class MasterDataModule { }