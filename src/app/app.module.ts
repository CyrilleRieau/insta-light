import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule} from '@angular/forms';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import {UserService} from './shared/user.service';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ModifyuserComponent } from './user/modifyuser/modifyuser.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    AdduserComponent,
    ModifyuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
