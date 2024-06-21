import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  private readonly API: string = "http://localhost:8080/rest/pessoa"; 
  
  salvar(pessoa: Pessoa): Observable<any> {
    return this.httpClient.post(this.API, pessoa);
  }

  atualizar(pessoa: Pessoa): Observable<any> {
    return this.httpClient.put(this.API, pessoa);
  }

  excluir(id: number): Observable<any> {
    return this.httpClient.delete(this.API + '/' + id);
  }

  consultar(id: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(this.API + '/' + id);
  }

  listarTodas(): Observable<Array<Pessoa>> {
    return this.httpClient.get<Array<Pessoa>>(this.API + '/todas');
  }
}
