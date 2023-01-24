import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrdemServico } from '../models/ordem-servico';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {
  baseUrl: String = environment.baseurl;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  /**
   * Método para buscar todos os técnicos
   * @returns Observable<Tecnico[]>
   */
  findAll(): Observable<OrdemServico[]> {
    const url = this.baseUrl + '/os';
    return this.http.get<OrdemServico[]>(url);
  }

  create(ordemServico: OrdemServico): Observable<OrdemServico> {
    const url = this.baseUrl + '/os';
    return this.http.post<OrdemServico>(url, ordemServico);
  }

  update(ordemServico: OrdemServico): Observable<OrdemServico> {
    const url = this.baseUrl + '/os/' + ordemServico.id;
    return this.http.put<OrdemServico>(url, ordemServico);
  }

  delete(id: any): Observable<void> {
    const url = this.baseUrl + '/os/' + id;
    return this.http.delete<void>(url);
  }

  findById(id: any): Observable<OrdemServico> {
    const url = this.baseUrl + '/os/' + id;
    return this.http.get<OrdemServico>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000,
    });
  }
}