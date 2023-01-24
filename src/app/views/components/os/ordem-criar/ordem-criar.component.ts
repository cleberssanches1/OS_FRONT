import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-ordem-criar',
  templateUrl: './ordem-criar.component.html',
  styleUrls: ['./ordem-criar.component.css'],
})
export class OrdemCriarComponent implements OnInit {
  constructor(
    private route: Router,
    private service: TecnicoService,
    private clienteService: ClienteService,
    private ordemService: OrdemServicoService
  ) {}

  tecnicoSelected = '';
  clienteSelected = '';
  statusSelected = '';
  prioridadeSelected = '';

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
  };

  tecnicos: Tecnico[] = [];
  clientes: Cliente[] = [];

  os: OrdemServico = {
    tecnico: '',
    cliente: '',
    observacoes: '',
    status: '',
    prioridade: '',
  };

  // nome = new FormControl('', [Validators.minLength(5)]);
  // cpf = new FormControl('', [Validators.minLength(11)]);
  // telefone = new FormControl('', [Validators.minLength(9)]);

  ngOnInit(): void {
    this.listarTecnicos();
    this.listarClientes();
  }

  listarTecnicos(): void {
    this.service.findAll().subscribe((resposta) => {
      this.tecnicos = resposta;
    });
  }

  listarClientes(): void {
    this.clienteService.findAll().subscribe((resposta) => {
      this.clientes = resposta;
    });
  }

  create(): void {
    this.ordemService.create(this.os).subscribe(
      (resposta) => {
        this.ordemService.message('Ordem de serviço criada com sucesso');
        this.route.navigate(['os']);
      },
      (err) => {
        console.log(err);
        this.service.message('Erro na criação da ordem de serviço');
      }
    );
  }

  cancel(): void{
    this.route.navigate(['os']);
  }
}
