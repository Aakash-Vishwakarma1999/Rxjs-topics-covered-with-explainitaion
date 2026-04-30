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
    AsyncSubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
