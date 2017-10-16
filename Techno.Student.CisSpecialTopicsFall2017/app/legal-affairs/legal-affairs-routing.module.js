"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const empty_router_outlet_component_1 = require("./../shared/empty-router-outlet.component");
const case_parties_lookup_component_1 = require("./master-data/case-parties-lookup.component");
const courts_lookup_component_1 = require("./master-data/courts-lookup.component");
const court_case_attachments_component_1 = require("./court-cases/court-case-attachments.component");
const court_case_edit_component_1 = require("./court-cases/court-case-edit.component");
const court_case_search_component_1 = require("./court-cases/court-case-search.component");
const court_case_view_component_1 = require("./court-cases/court-case-view.component");
const court_sitting_attachments_component_1 = require("./court-cases/court-sitting-attachments.component");
const court_sitting_edit_component_1 = require("./court-cases/court-sitting-edit.component");
const routes = [
    {
        path: 'legal-affairs',
        component: empty_router_outlet_component_1.EmptyRouterOutletComponent,
        children: [
            { path: 'manage-courts-lookup', component: courts_lookup_component_1.CourtsLookupComponent },
            { path: 'manage-case-parties-lookup', component: case_parties_lookup_component_1.CasePartiesLookupComponent },
            { path: 'add-attachment-to-court-case', component: court_case_attachments_component_1.CourtCaseAttachmentsComponent },
            { path: 'create-court-case', component: court_case_edit_component_1.CourtCaseEditComponent },
            { path: 'change-court-case', component: court_case_edit_component_1.CourtCaseEditComponent },
            { path: 'search-for-court-cases', component: court_case_search_component_1.CourtCaseSearchComponent },
            { path: 'display-court-case', component: court_case_view_component_1.CourtCaseViewComponent },
            { path: 'add-attachment-to-court-sitting', component: court_sitting_attachments_component_1.CourtSittingAttachmentsComponent },
            { path: 'create-court-sitting', component: court_sitting_edit_component_1.CourtSittingEditComponent }
        ]
    }
];
let LegalAffairsRoutingModule = class LegalAffairsRoutingModule {
};
LegalAffairsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], LegalAffairsRoutingModule);
exports.LegalAffairsRoutingModule = LegalAffairsRoutingModule;
//# sourceMappingURL=legal-affairs-routing.module.js.map