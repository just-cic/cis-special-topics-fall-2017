"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const shared_module_1 = require("./../../shared/shared.module");
const available_halls_report_component_1 = require("./available-halls-report.component");
const booked_halls_report_component_1 = require("./booked-halls-report.component");
const hall_booking_cancellation_component_1 = require("./hall-booking-cancellation.component");
const hall_booking_edit_component_1 = require("./hall-booking-edit.component");
const hall_booking_view_component_1 = require("./hall-booking-view.component");
const hall_booking_workflow_component_1 = require("./hall-booking-workflow.component");
const my_halls_bookings_component_1 = require("./my-halls-bookings.component");
let HallsBookingModule = class HallsBookingModule {
};
HallsBookingModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, shared_module_1.SharedModule],
        declarations: [available_halls_report_component_1.AvailableHallsReportComponent, booked_halls_report_component_1.BookedHallsReportComponent, hall_booking_cancellation_component_1.HallBookingCancellationComponent, hall_booking_edit_component_1.HallBookingEditComponent, hall_booking_view_component_1.HallBookingViewComponent, hall_booking_workflow_component_1.HallBookingWorkflowComponent, my_halls_bookings_component_1.MyHallsBookingsComponent]
    })
], HallsBookingModule);
exports.HallsBookingModule = HallsBookingModule;
//# sourceMappingURL=halls-booking.module.js.map