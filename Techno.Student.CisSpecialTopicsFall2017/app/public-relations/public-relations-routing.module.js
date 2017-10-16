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
const halls_lookup_component_1 = require("./master-data/halls-lookup.component");
const available_halls_report_component_1 = require("./halls-booking/available-halls-report.component");
const booked_halls_report_component_1 = require("./halls-booking/booked-halls-report.component");
const hall_booking_cancellation_component_1 = require("./halls-booking/hall-booking-cancellation.component");
const hall_booking_edit_component_1 = require("./halls-booking/hall-booking-edit.component");
const hall_booking_view_component_1 = require("./halls-booking/hall-booking-view.component");
const hall_booking_workflow_component_1 = require("./halls-booking/hall-booking-workflow.component");
const my_halls_bookings_component_1 = require("./halls-booking/my-halls-bookings.component");
const routes = [
    {
        path: 'public-relations',
        component: empty_router_outlet_component_1.EmptyRouterOutletComponent,
        children: [
            { path: 'manage-halls-lookup', component: halls_lookup_component_1.HallsLookupComponent },
            { path: 'available-halls-report', component: available_halls_report_component_1.AvailableHallsReportComponent },
            { path: 'booked-halls-report', component: booked_halls_report_component_1.BookedHallsReportComponent },
            { path: 'cancel-hall-booking', component: hall_booking_cancellation_component_1.HallBookingCancellationComponent },
            { path: 'create-hall-booking', component: hall_booking_edit_component_1.HallBookingEditComponent },
            { path: 'change-hall-booking', component: hall_booking_edit_component_1.HallBookingEditComponent },
            { path: 'display-hall-booking', component: hall_booking_view_component_1.HallBookingViewComponent },
            { path: 'approve-hall-booking', component: hall_booking_workflow_component_1.HallBookingWorkflowComponent },
            { path: 'display-my-bookings', component: my_halls_bookings_component_1.MyHallsBookingsComponent },
        ]
    }
];
let PublicRelationsRoutingModule = class PublicRelationsRoutingModule {
};
PublicRelationsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], PublicRelationsRoutingModule);
exports.PublicRelationsRoutingModule = PublicRelationsRoutingModule;
//# sourceMappingURL=public-relations-routing.module.js.map