import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent  implements OnInit {
  constructor(
     private router: Router,
     private service: ClienteService,
     private route : ActivatedRoute
     ) {}

idCliente : String = "";

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
  };

  nome = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  telefone = new FormControl('', [Validators.minLength(9)]);

  ngOnInit(): void {   
    this.idCliente = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['clientes']);
  }

findById(){
    this.service.findById(this.idCliente).subscribe(resposta => {
    this.cliente = resposta;
  },
  (err) => {
    console.log(err);
  //  this.service.message((err.error.errors[0].message));
  });  
}

  update() {
    this.service.update(this.cliente).subscribe(
      (resposta) => {
        this.router.navigate(['clientes']);
        this.service.message('Cliente atualizado com sucesso!');
      },
      (err) => {
        console.log(err);
        if (err.error.messages.match('já cadastrado')) {
          this.service.message(err.error.messages);
        } else if (
          err.error.errors[0].message ===
          'número do registro de contribuinte individual brasileiro (CPF) inválido'
        ) {
          console.log(err.error.messages);
          console.log(err.error.errors[0].message);
          this.service.message('CPF inválido');
        }
      }
    );
  }

  errorValueNome() {
    if (!this.nome.valid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

  errorValueCpf() {
    if (!this.cpf.valid) {
      return 'O cpf deve ter 11 números!';
    }
    return false;
  }

  errorValueTelefone() {
    if (!this.cpf.valid) {
      return 'O telefone deve ter no mínimo 9 números!';
    }
    return false;
  }
}
