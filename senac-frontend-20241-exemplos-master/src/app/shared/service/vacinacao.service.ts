import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacinacao } from '../model/vacinacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacinacaoService {

  constructor(private httpClient: HttpClient) { }

  private readonly API: string = "http://localhost:8080/rest/vacinacao";

  salvar(vacinacao: Vacinacao): Observable<any> {
    return this.httpClient.post(this.API, vacinacao);
  }

  atualizar(vacinacao: Vacinacao): Observable<any> {
    return this.httpClient.put(this.API, vacinacao);
  }

  excluir(id: number): Observable<any> {
    return this.httpClient.delete(this.API + '/' + id);
  }

  consultar(id: number): Observable<Vacinacao> {
    return this.httpClient.get<Vacinacao>(this.API + '/' + id);
  }

  consultarPorIdPessoa(idPessoa: number): Observable<Vacinacao> {
    return this.httpClient.get<Vacinacao>(this.API + '/pessoa/' + idPessoa);
  }

  listarTodas(): Observable<Array<Vacinacao>> {
    return this.httpClient.get<Array<Vacinacao>>(this.API + '/todas');
  }
}
