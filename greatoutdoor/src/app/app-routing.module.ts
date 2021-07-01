import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Role } from './model/role.model';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from './service/authguard.service';
import { UserComponent } from './user/user.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: '',component: HomeComponent,canActivate: [AuthGuard]},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'electronics',component:ElectronicsComponent,canActivate:[AuthGuard]},
  {path:'fashion',component:FashionComponent,canActivate:[AuthGuard]},
  {path:'homeappliance',component:HomeAppliancesComponent,canActivate:[AuthGuard]},
  {path:'order',component:OrderComponent,canActivate:[AuthGuard]},
  {path:'product',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'report',component:ReportComponent,canActivate:[AuthGuard]},
  {path:'wishlist',component:WishlistComponent,canActivate:[AuthGuard]},
  {path:'user',component:UserComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProductComponent,canActivate:[AuthGuard]},
  {path: 'login',component: LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
