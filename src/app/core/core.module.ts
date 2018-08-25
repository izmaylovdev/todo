import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDatabaseService } from './services/in-memory-database.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    environment.production ?
      [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class CoreModule { }
