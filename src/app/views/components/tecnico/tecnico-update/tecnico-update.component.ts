import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css'],
})
export class TecnicoUpdateComponent implements OnInit {
  constructor(
     private router: Router,
     private service: TecnicoService,
     private route : ActivatedRoute
     ) {}

idTecnico : String = "";

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
  };

  nome = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  telefone = new FormControl('', [Validators.minLength(9)]);

  ngOnInit(): void {   
    this.idTecnico = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['tecnicos']);
  }

findById(){
    this.service.findById(this.idTecnico).subscribe(resposta => {
    this.tecnico = resposta;
  },
  (err) => {
    console.log(err);
  //  this.service.message((err.error.errors[0].message));
  });  
}

  update() {
    this.service.update(this.tecnico).subscribe(
      (resposta) => {
        this.router.navigate(['tecnicos']);
        this.service.message('Técnico atualizado com sucesso!');
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
