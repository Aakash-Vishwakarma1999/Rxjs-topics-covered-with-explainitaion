import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OperatorHomeComponent } from './operators/operator-home/operator-home.component';
import { BufferOperatorComponent } from './operators/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './operators/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './operators/buffer-time-operator/buffer-time-operator.component';
import { TakeOperatorComponent } from './operators/take-operator/take-operator.component';


const routes: Routes = [
  { path: '', redirectTo: 'operators', pathMatch: 'full' },
  {
    path: 'operators',
    component: OperatorHomeComponent,
    
    children: [
      
      { path: 'buffer', component: BufferOperatorComponent },
      { path: 'buffercount', component: BufferCountOperatorComponent },
      { path: 'buffertime', component: BufferTimeOperatorComponent },
      { path: 'take', component: TakeOperatorComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule // 👈 VERY IMPORTANT
  ]
})


export class AppRoutingModule { }

