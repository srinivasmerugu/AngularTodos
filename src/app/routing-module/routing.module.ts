import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app.component';
import {TodoComponent} from '../todo/todo.component';
import {LoginComponent} from '../login/login.component';



const appRoutes: Routes = [
    
    
     { path: '', component: LoginComponent},
     { path: 'todoHome', component: TodoComponent}
//     { path: 'home', component: HomeComponent,
//         children: [
//              { path: 'transportpage', component: TransportPageComponent},
//               { path: 'formSmartTable', component: FormsearchComponent }
//                 ]
//      },
//     { path: 'about', component: AboutComponent },
//     { path: 'menu', component: MenuComponent },
//     {path: 'support' , component: SupportComponent,
//  children: [
//              { path: 'supportchildone', component: SupportchildoneComponent},
//               { path: 'supportchildtwo', component: SupportchildtwoComponent }
//                 ]},

//     {path: 'signup', component: SignupComponent},
   // { path: '', redirectTo: '/home', pathMatch: 'full' }
    
//     //     children: [
//     //         { path: '', component: RecipeStartComponent },
//     //         { path: 'new', component: RecipeEditComponent },
//     //         { path: ':id', component: RecipeDetailComponent },
//     //         { path: ':id/edit', component: RecipeEditComponent }
//     //     ]   
//     //  },
//     // { path: 'shopping-list', component: ShoppingListComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
     exports: [RouterModule]
})

export class RoutingModule {

}