import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-ordem-listar',
  templateUrl: './ordem-listar.component.html',
  styleUrls: ['./ordem-listar.component.css'],
})
export class OrdemListarComponent implements AfterViewInit {
  os: OrdemServico[] = [];

  displayedColumns: string[] = [
    'id',
    'dataAbertura',
    'dataFechamento',
    'prioridade',
    'status',
    'observacoes',
    'tecnico',
    'cliente',
    'action',
  ];
  dataSource = new MatTableDataSource<OrdemServico>(this.os);

  /**
 *  id? : any;
    dataAbertura: any;
    dataFechamento: any;
    prioridade : any;
    status : any;
    observacoes : String;
    tecnicoObject : Tecnico;
    clienteObject : Cliente;
    tecnico : any;
    cliente : any; 
 */

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: OrdemServicoService,
    private router: Router,
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService
  ) {}

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.os = resposta;
      this.listarTecnico();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<OrdemServico>(this.os);
      this.dataSource.paginator = this.paginator;
    }); 
  }

  listarTecnico(): void {
    this.os.forEach((x) => {
      this.tecnicoService.findById(x.tecnico).subscribe((resposta) => {
        x.tecnico = resposta.nome;
      });
    });
  }

  listarCliente(): void {
    this.os.forEach((x) => {
      this.clienteService.findById(x.cliente).subscribe((resposta) => {
        x.cliente = resposta.nome;
      });
    });
  }

  ngAfterViewInit() {
    this.findAll();
  }

  navigateToCreate(): void {
    this.router.navigate(['os/criar']);
  }


  prioridade(x : any){
    if(x == 'BAIXA'){
      return 'baixa';
    }else if(x == 'MEDIA'){
      return 'media';
    }else{
      return 'alta';
    }
  }
}
