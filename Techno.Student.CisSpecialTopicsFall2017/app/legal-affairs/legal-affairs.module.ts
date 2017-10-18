import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { MasterDataModule } from './master-data/master-data.module';
import { CourtCasesModule } from './court-cases/court-cases.module';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, SharedModule, MasterDataModule, CourtCasesModule],
    declarations: []
})
export class LegalAffairsModule { }
