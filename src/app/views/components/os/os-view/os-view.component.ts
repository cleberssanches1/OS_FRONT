import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css'],
})
export class OsViewComponent implements OnInit {
  os: OrdemServico = {
    tecnico: '',
    cliente: '',
    observacoes: '',
    status: '',
    prioridade: '',
  };

  constructor(
    private route: ActivatedRoute,
    private ordemService: OrdemServicoService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.ordemService.findById(this.os.id).subscribe((resposta) => {
      this.os = resposta;
      console.log(this.os);
    });
  }

  voltar() : void{
    this.router.navigate(['os']);
  }
}
