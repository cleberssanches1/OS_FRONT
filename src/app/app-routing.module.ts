import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoListarComponent } from './views/components/tecnico/tecnico-listar/tecnico-listar.component';

const routes: Routes = [
{
  path : '',
  component : HomeComponent
},
{
  path : 'tecnicos',
  component : TecnicoListarComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
