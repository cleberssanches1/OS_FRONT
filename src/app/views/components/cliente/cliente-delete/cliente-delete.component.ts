import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent  implements OnInit {
  constructor(
    private router: Router,
    private service: ClienteService,
    private route: ActivatedRoute
  ) {}

  idCliente: String = '';

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
  };

  ngOnInit(): void {
    this.idCliente = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['clientes']);
  }

  findById() {
    this.service.findById(this.idCliente).subscribe(
      (resposta) => {
        this.cliente = resposta;
      },
      (err) => {
        console.log(err);
        //  this.service.message((err.error.errors[0].message));
      }
    );
  }

  delete() {
    this.service.delete(this.cliente.id).subscribe(
      (resposta) => {
        this.router.navigate(['tecnicos']);
        this.service.message('Técnico excluído com sucesso!');
      },
      (err) => {
        console.log(err);
        if (err.error.messages.match('com ordens de serviço')) {
          this.service.message(err.error.messages);         
        }
      }
    );
  }
}