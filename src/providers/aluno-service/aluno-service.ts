import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the AlunoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlunoServiceProvider {

  aluno;
  public API = 'http://localhost:8080';
  public ALUNO_API = this.API + '/alunos';

  constructor(public http: Http) {

  }

  getAlunos(): Observable<any>{
    return this.http.get(this.API + '/alunos')
    .map((response:Response)=>response.json())

  }
  save(aluno:any){
        this.aluno = aluno;
        let result: Observable<Response>;
    
          result = this.http.post(this.API + '/alunos', this.aluno)
    
    
        return result.map((response: Response) => response.json())
        .catch(error => Observable.throw(error));
      }
    
    
 }



