import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-ordem-update',
  templateUrl: './ordem-update.component.html',
  styleUrls: ['./ordem-update.component.css'],
})
export class OrdemUpdateComponent implements OnInit {
  constructor(
    private router: Router,
    private service: TecnicoService,
    private clienteService: ClienteService,
    private ordemService: OrdemServicoService,
    private route: ActivatedRoute
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
    this.os.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.listarTecnicos();
    this.listarClientes();   

    //console.log(this.os);
  }

  findById(): void {
    this.ordemService.findById(this.os.id).subscribe((resposta) => {
      this.os = resposta;
      console.log(this.os);
      this.convertDados();
      console.log(this.os);
    });
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

  update(): void {
 //   this.convertDados();
    console.log(this.os);
    this.ordemService.update(this.os).subscribe(
      (resposta) => {
        this.ordemService.message('Ordem de serviço atualizada com sucesso');
        this.router.navigate(['os']);
      },
      (err) => {
        console.log(err);
        this.service.message('Erro na atualização da ordem de serviço');
      }
    );
  }

  cancel(): void {
    this.router.navigate(['os']);
  }

  convertDados(): void{
    if(this.os.status == 'ABERTO'){
      this.os.status = 0;
    }else if(this.os.status == 'ANDAMENTO'){
      this.os.status = 1;
    }else{
      this.os.status = 2;
    }

    if(this.os.prioridade == 'BAIXA'){
      this.os.prioridade = 0;
    }else if(this.os.prioridade == 'MEDIA'){
      this.os.prioridade = 1;
    }else{
      this.os.prioridade = 2;
    }
  }
}
