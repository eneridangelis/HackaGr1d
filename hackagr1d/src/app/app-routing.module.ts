import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'datebirth', loadChildren: './datebirth/datebirth.module#DatebirthModule'},
  { path: 'prof-income', loadChildren: './prof-income/prof-income.module#ProfIncomeModule'},
  { path: 'choose', loadChildren: './choose/choose.module#ChooseModule'},
  { path: 'acquire', loadChildren: './acquire/acquire.module#AcquireModule'},
  { path: 'buycar', loadChildren: './buycar/buycar.module#BuyCarModule'},
  { path: 'buycar1', loadChildren: './buycar1/buycar1.module#BuyCar1Module'},
  { path: 'knowmore', loadChildren: './knowmore/knowmore.module#KnowMoreModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
