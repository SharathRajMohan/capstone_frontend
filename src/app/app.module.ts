import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { DeleteFoodComponent } from './delete-food/delete-food.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { FoodService } from './food.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { LoginsuccessuserComponent } from './loginsuccessuser/loginsuccessuser.component';
import { FooterComponent } from './footer/footer.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './productlist/products/products.component';
import { FiltersComponent } from './productlist/filters/filters.component';
import { CartComponent } from './productlist/cart/cart.component';
import { SorterComponent } from './productlist/sorter/sorter.component';
import { CartitemComponent } from './productlist/cart/cartitem/cartitem.component';
import { ProductitemComponent } from './productlist/products/productitem/productitem.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent,
    UpdateFoodComponent,
    DeleteFoodComponent,
    FoodsListComponent,
    SearchFoodComponent,
    LoginComponent,
    LoginsuccessComponent,
    RegistrationComponent,
    AdminLoginComponent,
    AdminRegistrationComponent,
    LoginsuccessuserComponent,
    FooterComponent,
    ProductlistComponent,
    NavComponent,
    ProductsComponent,
    FiltersComponent,
    CartComponent,
    SorterComponent,
    CartitemComponent,
    ProductitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
