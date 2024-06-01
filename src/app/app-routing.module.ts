import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContentComponent } from './components/create-content/create-content.component';
import { ViewContentComponent } from './components/view-content/view-content.component';
import { DeleteContentComponent } from './components/delete-content/delete-content.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'create', component: CreateContentComponent, canActivate: [AuthGuard] },
  { path: 'view', component: ViewContentComponent },
  { path: 'delete', component: DeleteContentComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
