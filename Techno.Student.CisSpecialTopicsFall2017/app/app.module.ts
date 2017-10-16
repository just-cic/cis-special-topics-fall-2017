import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { ErpCoreModule } from './erp-core/erp-core.module';
import { SharedModule } from './shared/shared.module';
import { ErpSharedModule } from './erp-shared/erp-shared.module';

import { LegalAffairsModule } from './legal-affairs/legal-affairs.module';
import { PublicRelationsModule } from './public-relations/public-relations.module';

import { AppComponent } from './app.component';

import { LegalAffairsRoutingModule } from './legal-affairs/legal-affairs-routing.module';
import { PublicRelationsRoutingModule } from './public-relations/public-relations-routing.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, CommonModule, RouterModule, LegalAffairsRoutingModule, PublicRelationsRoutingModule, AppRoutingModule, HttpModule, FormsModule, CoreModule, ErpCoreModule, SharedModule, ErpSharedModule, LegalAffairsModule, PublicRelationsModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent]
})
export class AppModule {
    
  constructor() {}
}
