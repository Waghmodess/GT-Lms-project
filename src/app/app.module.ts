import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllComponent } from './all/all.component';
import { FreshComponent } from './fresh/fresh.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { WalkinComponent } from './walkin/walkin.component';
import { InFutureComponent } from './in-future/in-future.component';
import { ClosedComponent } from './closed/closed.component';
import { ReferredFromMeComponent } from './referred-from-me/referred-from-me.component';
import { ReEnquiredComponent } from './re-enquired/re-enquired.component';
import { OnlineComponent } from './online/online.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { DripMarketingComponent } from './drip-marketing/drip-marketing.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FailedLeadsComponent } from './failed-leads/failed-leads.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { MyFollowupsComponent } from './my-followups/my-followups.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { RoutingComponent } from './routing/routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { WonComponent } from './won/won.component';
import { MatTreeModule } from '@angular/material/tree';
import { LabelShowmoreComponent } from './label-showmore/label-showmore.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    FreshComponent,
    FollowUpComponent,
    WalkinComponent,
    InFutureComponent,
    ClosedComponent,
    ReferredFromMeComponent,
    ReEnquiredComponent,
    OnlineComponent,
    SettingsComponent,
    ReportsComponent,
    DripMarketingComponent,
    MarketingComponent,
    FailedLeadsComponent,
    ChatListComponent,
    MyFollowupsComponent,
    LeadListComponent,
    RoutingComponent,
    WonComponent,
    LabelShowmoreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, ReactiveFormsModule, FormsModule, HttpClientModule, ScrollingModule,

    MatSidenavModule, MatCardModule, MatIconModule, MatToolbarModule, MatExpansionModule,
    MatCheckboxModule, MatGridListModule, MatDialogModule, MatButtonModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatBadgeModule, MatDatepickerModule, MatNativeDateModule,
    MatMenuModule, MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
