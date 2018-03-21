import { AlunoServiceProvider } from './../../providers/aluno-service/aluno-service';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


/**
 * Generated class for the AlunoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-aluno-modal',
  templateUrl: 'aluno-modal.html',
})
export class AlunoModalPage {

  @ViewChild('nome') nome;
  @ViewChild('curso') curso;
  @ViewChild('estadoCivil') estadoCivil;
  aluno:any = {};
  error: any;
  cursos = [

  {id: 1, nome: "Sistemas de informação"},
  {id: 2, nome: "Serviço Social"}
  ]
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public toastCtrl:ToastController,
              public alunoProvider:AlunoServiceProvider,
              public alertCtrl:AlertController,
              public loadingCtrl:LoadingController
            ) {
      }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save(form) {
    let alunoForm = form;
    console.log(this.curso.value);

    alunoForm.curso = this.curso.value
    alunoForm.id = this.curso.value


    this.alunoProvider.save(alunoForm).subscribe(result => {

    }, error => this.error = error);


    let loading = this.loadingCtrl.create({
      content: 'Inserindo aluno...'
    });

    loading.present();
    setTimeout(() => {
      loading.dismissAll();
      this.dismiss();
      let toast = this.toastCtrl.create({
        message: 'aluno "' + alunoForm.nome + " Salvo" + '.',
        position:'bottom',
        duration: 2000
      });
      toast.present();

    },3000);

  }

  ionViewDidLoad() {

    setTimeout(() => {
      this.nome.setFocus();
    },150);
  }


}
