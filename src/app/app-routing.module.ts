import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
