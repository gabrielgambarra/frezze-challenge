import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutes } from 'src/app/app-routing.module';
import { AuthInterceptor } from 'src/app/providers/services/auth.interceptor';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { MaterialModule } from './shared/material/material.module';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    PipesModule
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
;