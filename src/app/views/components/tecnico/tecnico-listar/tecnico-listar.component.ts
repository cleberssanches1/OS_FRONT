import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-listar',
  templateUrl: './tecnico-listar.component.html',
  styleUrls: ['./tecnico-listar.component.css'],
})
export class TecnicoListarComponent implements AfterViewInit {
  tecnicos: Tecnico[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'action'];
  dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: TecnicoService, private router: Router) {}

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.tecnicos = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);
      this.dataSource.paginator = this.paginator;

      // console.log(this.tecnicos)
    });
  }

  ngAfterViewInit() {
    this.findAll();
  }

  navigateToCreate() : void{
    this.router.navigate(['tecnicos/create'])
  }
}
