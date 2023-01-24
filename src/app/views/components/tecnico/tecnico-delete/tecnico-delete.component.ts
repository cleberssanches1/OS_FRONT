import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css'],
})
export class TecnicoDeleteComponent implements OnInit {
  constructor(
    private router: Router,
    private service: TecnicoService,
    private route: ActivatedRoute
  ) {}

  idTecnico: String = '';

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
  };

  ngOnInit(): void {
    this.idTecnico = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['tecnicos']);
  }

  findById() {
    this.service.findById(this.idTecnico).subscribe(
      (resposta) => {
        this.tecnico = resposta;
      },
      (err) => {
        console.log(err);
        //  this.service.message((err.error.errors[0].message));
      }
    );
  }

  delete() {
    this.service.delete(this.tecnico.id).subscribe(
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
