import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import { WebApiProxyService } from './../../core/web-api-proxy.service';
//import { ModalService } from './../../core/modal.service';
//import { StorageService } from './../../core/storage.service';
//import { LookupService } from './../../core/lookups/lookup.service';
//import { ActionBarService } from './../../erp-core/action-bar/action-bar.service';
//import { FormService } from './../../core/form.service';

@Component({
    templateUrl: './app/public-relations/master-data/halls-lookup.component.html'
})
export class HallsLookupComponent implements OnInit {

    constructor(/*private webApi: WebApiProxyService, private modal: ModalService, private storage: StorageService, private lookup: LookupService, private actionBar: ActionBarService, private form: FormService*/) {
    }

    ngOnInit() {
    }
}
