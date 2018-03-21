import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoModalPage } from './aluno-modal';

@NgModule({
  declarations: [
    AlunoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoModalPage),
  ],
})
export class AlunoModalPageModule {}
