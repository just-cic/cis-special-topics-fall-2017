import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';

import { AvailableHallsReportComponent } from './available-halls-report.component';
import { BookedHallsReportComponent } from './booked-halls-report.component';
import { HallBookingCancellationComponent } from './hall-booking-cancellation.component';
import { HallBookingEditComponent } from './hall-booking-edit.component';
import { HallBookingViewComponent } from './hall-booking-view.component';
import { HallBookingWorkflowComponent } from './hall-booking-workflow.component';
import { MyHallsBookingsComponent } from './my-halls-bookings.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, SharedModule],
    declarations: [AvailableHallsReportComponent, BookedHallsReportComponent, HallBookingCancellationComponent, HallBookingEditComponent, HallBookingViewComponent, HallBookingWorkflowComponent, MyHallsBookingsComponent]
})
export class HallsBookingModule { }
