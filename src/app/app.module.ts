import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestorComponent } from './gestor/gestor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GestorComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'gestor', component: GestorComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'},
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
