import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ClosedComponent } from './closed/closed.component';
import { DripMarketingComponent } from './drip-marketing/drip-marketing.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { FailedLeadsComponent } from './failed-leads/failed-leads.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { FreshComponent } from './fresh/fresh.component';
import { InFutureComponent } from './in-future/in-future.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MyFollowupsComponent } from './my-followups/my-followups.component';
import { OnlineComponent } from './online/online.component';
import { ReEnquiredComponent } from './re-enquired/re-enquired.component';
import { ReferredFromMeComponent } from './referred-from-me/referred-from-me.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { WalkinComponent } from './walkin/walkin.component';
import { WonComponent } from './won/won.component';

const routes: Routes = [
  { path: "all", component: AllComponent },
  { path: "fresh", component: FreshComponent },
  { path: "follow-up", component: FollowUpComponent },
  { path: "walkin", component: WalkinComponent },
  { path: "in-future", component: InFutureComponent },
  { path: "enrolled", component: EnrolledComponent },
  { path: "closed", component: ClosedComponent },
  { path: "referred-from-me", component: ReferredFromMeComponent },
  { path: "re-enquired", component: ReEnquiredComponent },
  { path: "online", component: OnlineComponent },
  { path: "lead-list", component: LeadListComponent },
  { path: "my-followups", component: MyFollowupsComponent },
  { path: "chat-list", component: ChatListComponent },
  { path: "failed-leads", component: FailedLeadsComponent },
  { path: "marketing", component: MarketingComponent },
  { path: "drip-marketing", component: DripMarketingComponent },
  { path: "reports", component: ReportsComponent },
  { path: "settings", component: SettingsComponent },
  { path: "won", component: WonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
