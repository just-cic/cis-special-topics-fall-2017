
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyComponent } from './../shared/empty.component';
import { EmptyRouterOutletComponent } from './../shared/empty-router-outlet.component';

import { CasePartiesLookupComponent } from './master-data/case-parties-lookup.component';
import { CourtsLookupComponent } from './master-data/courts-lookup.component';

import { CourtCaseAttachmentsComponent } from './court-cases/court-case-attachments.component';
import { CourtCaseEditComponent } from './court-cases/court-case-edit.component';
import { CourtCaseSearchComponent } from './court-cases/court-case-search.component';
import { CourtCaseViewComponent } from './court-cases/court-case-view.component';
import { CourtSittingAttachmentsComponent } from './court-cases/court-sitting-attachments.component';
import { CourtSittingEditComponent } from './court-cases/court-sitting-edit.component';

const routes: Routes = [
    {
        path: 'legal-affairs',
        component: EmptyRouterOutletComponent,
        children: [
            { path: 'manage-courts-lookup', component: CourtsLookupComponent },
            { path: 'manage-case-parties-lookup', component: CasePartiesLookupComponent },

            { path: 'add-attachment-to-court-case', component: CourtCaseAttachmentsComponent },
            { path: 'create-court-case', component: CourtCaseEditComponent },
            { path: 'change-court-case', component: CourtCaseEditComponent },
            { path: 'search-for-court-cases', component: CourtCaseSearchComponent },
            { path: 'display-court-case', component: CourtCaseViewComponent },
            { path: 'add-attachment-to-court-sitting', component: CourtSittingAttachmentsComponent },
            { path: 'create-court-sitting', component: CourtSittingEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LegalAffairsRoutingModule { }
