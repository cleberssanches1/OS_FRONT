import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HeaderComponent } from './views/components/templates/header/header.component';
import { FooterComponent } from './views/components/templates/footer/footer.component';
 
import { NavComponent } from './views/components/templates/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoListarComponent } from './views/components/tecnico/tecnico-listar/tecnico-listar.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteListarComponent } from './views/components/cliente/cliente-listar/cliente-listar.component';
import { ClienteCriarComponent } from './views/components/cliente/cliente-criar/cliente-criar.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { OrdemListarComponent } from './views/components/os/ordem-listar/ordem-listar.component';
import { OrdemUpdateComponent } from './views/components/os/ordem-update/ordem-update.component';
import { OrdemCriarComponent } from './views/components/os/ordem-criar/ordem-criar.component';
import { OrdemDeleteComponent } from './views/components/os/ordem-delete/ordem-delete.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';

import {MatMenuModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent, FooterComponent, NavComponent, HomeComponent, TecnicoListarComponent, TecnicoCreateComponent, TecnicoUpdateComponent, TecnicoDeleteComponent, ClienteListarComponent, ClienteCriarComponent, ClienteUpdateComponent, ClienteDeleteComponent, OrdemListarComponent, OrdemUpdateComponent, OrdemCriarComponent, OrdemDeleteComponent, OsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
