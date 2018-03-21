import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {AlunoServiceProvider} from '../../providers/aluno-service/aluno-service';
import { AlunoModalPage } from '../aluno-modal/aluno-modal';

/**
 * Generated class for the AlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-aluno',
  templateUrl: 'aluno.html',
})
export class AlunoPage {
  alunos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alunoService: AlunoServiceProvider, public modalCtrl:ModalController) {
      this.alunoService.getAlunos().subscribe(alunos => {
        this.alunos = alunos;
      })
    }

    ionViewDidEnter() {
      this.alunoService.getAlunos().subscribe(alunos => {
        this.alunos = alunos;
      })

  }

  openModal(aluno) {
     let modal = this.modalCtrl.create(AlunoModalPage, aluno);
      modal.present();
      // refresh data after modal dismissed
      modal.onDidDismiss(() => this.ionViewDidEnter())
      }    
    
     }


