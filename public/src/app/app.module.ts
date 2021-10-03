import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor} from "./auth.interceptor"
import { MatPaginatorModule} from "@angular/material/paginator"
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner"
import { AuthGuard } from "./auth.guard";
import { PagenotfoundComponent } from './auth/pagenotfound/pagenotfound.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './shared/highlight.directive';
import { PipesModule } from './shared/pipes/pipes.module';
import { StickyNavModule } from 'ng2-sticky-nav';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    SpinnerComponent,
    HomeComponent,
    HighlightDirective,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    PipesModule,
    StickyNavModule
    
  ],

  providers: [ AuthGuard, PipesModule, { provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
