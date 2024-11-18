import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCommonModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {MatStepperModule} from '@angular/material/stepper';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ClientComponent } from './components/client/client.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { AdminComponent } from './components/admin/admin.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import {DialogModule} from '@angular/cdk/dialog';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core'
import {JsonPipe} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BookingsComponent,
    ClientComponent,
    ReceptionistComponent,
    AdminComponent,
    DialogConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCommonModule,
    MatButtonModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DialogModule,
    MatDatepickerModule,
    JsonPipe,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    AuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
