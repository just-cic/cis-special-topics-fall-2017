
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyComponent } from './../shared/empty.component';
import { EmptyRouterOutletComponent } from './../shared/empty-router-outlet.component';

import { HallsLookupComponent } from './master-data/halls-lookup.component';

import { AvailableHallsReportComponent } from './halls-booking/available-halls-report.component';
import { BookedHallsReportComponent } from './halls-booking/booked-halls-report.component';
import { HallBookingCancellationComponent } from './halls-booking/hall-booking-cancellation.component';
import { HallBookingEditComponent } from './halls-booking/hall-booking-edit.component';
import { HallBookingViewComponent } from './halls-booking/hall-booking-view.component';
import { HallBookingWorkflowComponent } from './halls-booking/hall-booking-workflow.component';
import { MyHallsBookingsComponent } from './halls-booking/my-halls-bookings.component';

const routes: Routes = [
    {
        path: 'public-relations',
        component: EmptyRouterOutletComponent,
        children: [
            { path: 'manage-halls-lookup', component: HallsLookupComponent },

            { path: 'available-halls-report', component: AvailableHallsReportComponent },
            { path: 'booked-halls-report', component: BookedHallsReportComponent },
            { path: 'cancel-hall-booking', component: HallBookingCancellationComponent },
            { path: 'create-hall-booking', component: HallBookingEditComponent },
            { path: 'change-hall-booking', component: HallBookingEditComponent },
            { path: 'display-hall-booking', component: HallBookingViewComponent },
            { path: 'approve-hall-booking', component: HallBookingWorkflowComponent },
            { path: 'display-my-bookings', component: MyHallsBookingsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PublicRelationsRoutingModule { }
