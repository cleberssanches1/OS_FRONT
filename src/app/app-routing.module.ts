import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCriarComponent } from './views/components/cliente/cliente-criar/cliente-criar.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListarComponent } from './views/components/cliente/cliente-listar/cliente-listar.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './views/components/home/home.component';
import { OrdemCriarComponent } from './views/components/os/ordem-criar/ordem-criar.component';
import { OrdemDeleteComponent } from './views/components/os/ordem-delete/ordem-delete.component';
import { OrdemListarComponent } from './views/components/os/ordem-listar/ordem-listar.component';
import { OrdemUpdateComponent } from './views/components/os/ordem-update/ordem-update.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoListarComponent } from './views/components/tecnico/tecnico-listar/tecnico-listar.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tecnicos',
    component: TecnicoListarComponent,
  },
  {
    path: 'tecnicos/create',
    component: TecnicoCreateComponent,
  },
  {
    path: 'tecnicos/update/:id',
    component: TecnicoUpdateComponent,
  },
  {
    path: 'tecnicos/delete/:id',
    component: TecnicoDeleteComponent,
  },

  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent,
  },
  {
    path: 'clientes',
    component: ClienteListarComponent,
  },
  {
    path: 'clientes/criar',
    component: ClienteCriarComponent,
  },
  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent,
  },

  {
    path: 'os/delete/:id',
    component: OrdemDeleteComponent,
  },
  {
    path: 'os',
    component: OrdemListarComponent,
  },
  {
    path: 'os/criar',
    component: OrdemCriarComponent,
  },
  {
    path: 'os/update/:id',
    component: OrdemUpdateComponent,
  },

  {
    path: 'os/view/:id',
    component: OsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
