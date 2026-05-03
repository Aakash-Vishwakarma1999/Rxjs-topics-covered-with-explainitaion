import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { ObservableWay2Component } from './observable/observable-way2/observable-way2.component';
import { ObservableErrorCompleteComponent } from './observable/observable-error-complete/observable-error-complete.component';
import { OfFromOperatorComponent } from './observable/of-from-operator/of-from-operator.component';
import { MapFilterOperatorComponent } from './observable/map-filter-operator/map-filter-operator.component';
import { SubjectInRxJSComponent } from './Subjects/subject-in-rx-js/subject-in-rx-js.component';
import { NewTaskComponent } from './Subjects/new-task/new-task.component';
import { ShowTaskComponent } from './Subjects/show-task/show-task.component';
import { FormsModule } from '@angular/forms';
import { BehaviorSubjectComponent } from './Subjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './Subjects/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Subjects/async-subject/async-subject.component';
import { WaysToSubscribeToObservableComponent } from './observable/ways-to-subscribe-to-observable/ways-to-subscribe-to-observable.component';
import { FunctionVSObservablesComponent } from './observable/function-vs-observables/function-vs-observables.component';
import { UnsubscribingObservableComponent } from './observable/unsubscribing-observable/unsubscribing-observable.component';
import { AvoidingMemoryLeakageComponent } from './observable/avoiding-memory-leakage/avoiding-memory-leakage.component';
import { BufferOperatorComponent } from './operators/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './operators/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './operators/buffer-time-operator/buffer-time-operator.component';
import { TakeOperatorComponent } from './operators/take-operator/take-operator.component';
import { OperatorHomeComponent } from './operators/operator-home/operator-home.component';
import { provideRoutes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TakeUntilOperatorComponent } from './operators/take-until-operator/take-until-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObservableComponent,
    ObservableWay2Component,
    ObservableErrorCompleteComponent,
    OfFromOperatorComponent,
    MapFilterOperatorComponent,
    SubjectInRxJSComponent,
    NewTaskComponent,
    ShowTaskComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    WaysToSubscribeToObservableComponent,
    FunctionVSObservablesComponent,
    UnsubscribingObservableComponent,
    AvoidingMemoryLeakageComponent,
    BufferOperatorComponent,
    BufferCountOperatorComponent,
    BufferTimeOperatorComponent,
    TakeOperatorComponent,
    OperatorHomeComponent,
    TakeUntilOperatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
