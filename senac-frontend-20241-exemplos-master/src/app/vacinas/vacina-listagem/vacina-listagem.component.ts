import { Component, OnInit } from '@angular/core';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { Vacina } from '../../shared/model/vacina';
import { PaisService } from '../../shared/service/pais.service';
import { VacinaService } from '../../shared/service/vacina.service';
import { Pais } from '../../shared/model/pais';

@Component({
  selector: 'app-vacina-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})
export class VacinaListagemComponent implements OnInit  {

  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();

  public paises: Array<Pais> = new Array();

  constructor(private vacinaService: VacinaService,
              private paisService: PaisService){}

  ngOnInit(): void {
    this.consultarTodasVacinas();

    this.paisService.consultarTodos().subscribe(
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.log('Erro ao buscar países' + erro)
      }
    );
  }

  public pesquisar(){
    this.vacinaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado; 
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    )
  }

  limpar(){
    this.seletor = new VacinaSeletor();
  }

  private consultarTodasVacinas(){
    this.vacinaService.consultarTodas().subscribe(
      resultado => {
         this.vacinas = resultado; 
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    );
  }
}
