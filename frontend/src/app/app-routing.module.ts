import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AuthGuard } from './services/auth/auth.guard';
import { SecureInnerPagesGuard } from './services/auth/secure-inner-pages.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/general/dashboard/dashboard.module')
      .then(mod => mod.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'statistics',
    loadChildren: () => import('./modules/application/statistics/statistics.module')
      .then(mod => mod.StatisticsModule),
    canActivate: [AuthGuard],
  },
  {
    path: "companies",
    loadChildren: () => import('./modules/application/companies/companies.module')
      .then(mod => mod.CompaniesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'jobs',
    loadChildren: () => import('./modules/application/jobs/jobs.module')
      .then(mod => mod.JobsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'talents',
    loadChildren: () => import('./modules/application/talents/talents.module')
      .then(mod => mod.TalentsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/login.module')
      .then(mod => mod.LoginModule),
    canActivate: [SecureInnerPagesGuard],
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/general/signup/signup.module')
      .then(mod => mod.SignupModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
