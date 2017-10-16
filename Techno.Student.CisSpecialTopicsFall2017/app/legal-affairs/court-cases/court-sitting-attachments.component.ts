import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import { StorageService } from './../../core/storage.service';
//import { ModalService } from './../../core/modal.service';

@Component({
    templateUrl: './app/legal-affairs/court-cases/court-sitting-attachments.component.html'
})
export class CourtSittingAttachmentsComponent implements OnInit {

    constructor(/*private storage: StorageService, private modal: ModalService*/) {
    }

    ngOnInit() {
    }
}
