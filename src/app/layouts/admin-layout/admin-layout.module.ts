import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../users/user-profile/user-profile.component';
import { UsersComponent } from '../../users/users/users.component';
import { AddUserComponent } from '../../users/add-user/add-user.component';
import { RegulationsComponent } from '../../regulations-all/regulations/regulations.component';
import { AddRegulationComponent } from '../../regulations-all/add-regulation/add-regulation.component';
import { DetailRegulationComponent } from '../../regulations-all/detail-regulation/detail-regulation.component';

import { TrendingsComponent } from '../../trending-all/trendings/trendings.component';
import { AddTrendingComponent } from '../../trending-all/add-trending/add-trending.component';
import { DetailTrendingComponent } from '../../trending-all/detail-trending/detail-trending.component';

import { InvestorsComponent } from '../../investors/investors.component';
import { InfosComponent } from '../../info-all/infos/infos.component';
import {ComplaintsComponent } from '../../complaints-all/complaints/complaints.component';

import { JobsComponent } from '../../jobs/jobs.component';
import { FaqComponent } from '../../faq-all/faq/faq.component';
import { EditorComponent } from '../../components/editor/editor.component';
 
import { AddInfoComponent } from '../../info-all/add-info/add-info.component';
import { DetailInfoComponent } from '../../info-all/detail-info/detail-info.component';

import { CompetitionsComponent } from '../../competitions-all/competions/competitions.component';
import { AddCompetitionComponent } from '../../competitions-all/add-competition/add-competition.component';
import { DetailCompetitionComponent } from '../../competitions-all/detail-competition/detail-competition.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { NgxQuillModule } from '@dimpu/ngx-quill';
import {ReclamationsComponent} from '../../reclamations-all/reclamations';
import {DetailReclamationComponent} from '../../reclamations-all/detail-reclamation';
import {DetailComplaintComponent} from '../../complaints-all/detail-complaint';
import {SsocallbackComponent} from '../../sso-callback/ssocallback.component';

//  import { DataTablesModule } from "angular-datatables";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    NgxQuillModule
    //DataTablesModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    AddUserComponent,
    RegulationsComponent,
    AddRegulationComponent,
    DetailRegulationComponent,
    TrendingsComponent,
    AddTrendingComponent,
    DetailTrendingComponent,
    JobsComponent,
    FaqComponent,
    ComplaintsComponent,
    DetailComplaintComponent,
    ReclamationsComponent,
    DetailReclamationComponent,
    InfosComponent,
    InvestorsComponent,
    EditorComponent,
    AddInfoComponent,
    DetailInfoComponent,
    UsersComponent,
    CompetitionsComponent,
    AddCompetitionComponent,
    DetailCompetitionComponent,

  ]
})

export class AdminLayoutModule {}
