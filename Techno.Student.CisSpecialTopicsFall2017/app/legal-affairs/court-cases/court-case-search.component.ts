import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import { StorageService } from './../../core/storage.service';
//import { ModalService } from './../../core/modal.service';

@Component({
    templateUrl: './app/legal-affairs/court-cases/court-case-search.component.html'
})
export class CourtCaseSearchComponent implements OnInit {

    constructor(/*private storage: StorageService, private modal: ModalService*/) {
    }

    ngOnInit() {
    }
}
