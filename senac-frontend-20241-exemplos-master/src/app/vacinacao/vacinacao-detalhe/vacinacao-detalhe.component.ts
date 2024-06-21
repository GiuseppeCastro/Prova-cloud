import { VacinaService } from './../../shared/service/vacina.service';
import { Component, OnInit } from '@angular/core';
import { Vacinacao } from '../../shared/model/vacinacao';
import { Pessoa } from '../../shared/model/pessoa';
import { Vacina } from '../../shared/model/vacina';
import { PessoaService } from '../../shared/service/pessoa.service';
import Swal from 'sweetalert2';
import { VacinacaoService } from '../../shared/service/vacinacao.service';

@Component({
  selector: 'app-vacinacao-detalhe',
  templateUrl: './vacinacao-detalhe.component.html',
  styleUrls: ['./vacinacao-detalhe.component.scss']
})
export class VacinacaoDetalheComponent implements OnInit {

  public vacinacao: Vacinacao = new Vacinacao();
  public pessoas: Pessoa[] = [];
  public vacinas: Vacina[] = [];
  
  constructor(private vacinaService: VacinaService,
              private pessoaService: PessoaService,
              private vacinacaoService: VacinacaoService
  ) { }

  ngOnInit(): void {
    this.consultarPessoas();
    this.consultarVacinas();
  }

  consultarPessoas() {
    this.pessoaService.listarTodas().subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        Swal.fire('Erro ao buscar pessoas', erro, 'error');
      }
    );
  }

  consultarVacinas() {
    this.vacinaService.consultarTodas().subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        Swal.fire('Erro ao buscar vacinas', erro, 'error');
      }
    );
  }

  salvar(){
    this.vacinacaoService.salvar(this.vacinacao).subscribe(
      resultado => {
        Swal.fire('Vacinação salva com sucesso', '', 'success');
      },
      erro => {
        Swal.fire('Erro ao salvar vacinação', erro, 'error');
      }
    );
  
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
