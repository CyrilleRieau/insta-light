import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import {UserService} from './shared/user.service';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ModifyuserComponent } from './user/modifyuser/modifyuser.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    AdduserComponent,
    ModifyuserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
