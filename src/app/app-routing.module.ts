import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';


const routes: Routes = [
    {
        path: 'dashboard', component: DashboardComponentComponent
    },
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },
    {
        path: '**', redirectTo:''
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}