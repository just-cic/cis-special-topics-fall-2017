import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';

import { CourtCaseAttachmentsComponent } from './court-case-attachments.component';
import { CourtCaseEditComponent } from './court-case-edit.component';
import { CourtCaseSearchComponent } from './court-case-search.component';
import { CourtCaseViewComponent } from './court-case-view.component';
import { CourtSittingAttachmentsComponent } from './court-sitting-attachments.component';
import { CourtSittingEditComponent } from './court-sitting-edit.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, SharedModule],
    declarations: [CourtCaseAttachmentsComponent, CourtCaseEditComponent, CourtCaseSearchComponent, CourtCaseViewComponent, CourtSittingAttachmentsComponent, CourtSittingEditComponent]
})
export class CourtCasesModule { }
