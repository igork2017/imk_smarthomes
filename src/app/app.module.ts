import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routes';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    WelcomeComponent,
    RegisterComponent,
    CheckoutComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
