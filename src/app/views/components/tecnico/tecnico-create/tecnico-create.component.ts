import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css'],
})
export class TecnicoCreateComponent implements OnInit {
  constructor(private route: Router, private service: TecnicoService) {}

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
  };

  nome = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  telefone = new FormControl('', [Validators.minLength(9)]);

  ngOnInit(): void {}

  cancel(): void {
    this.route.navigate(['tecnicos']);
  }

  create() {
    this.service.create(this.tecnico).subscribe(
      (resposta) => {
        this.route.navigate(['tecnicos']);
        this.service.message('Técnico criado com sucesso!');
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


  errorValueNome(){
    if(!this.nome.valid){
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

  errorValueCpf(){
    if(!this.cpf.valid){
      return 'O cpf deve ter 11 números!';
    }
    return false;
  }

  errorValueTelefone(){
    if(!this.cpf.valid){
      return 'O telefone deve ter no mínimo 9 números!';
    }
    return false;
  }

}
