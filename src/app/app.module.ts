import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// se debe importar el module en imports y no en declarations
import { HeroesModule } from './Heroes/Heroes.module';

import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // se debe importar el module en imports y no en declarations
    HeroesModule,

    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
