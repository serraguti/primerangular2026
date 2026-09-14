import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from './components/primercomponent/primer.component';
import { HooksAngular } from './components/hooksangular/hooks.angular';
import { DeportesComponent } from './components/deportescomponent/deportes.component';

@NgModule({
  declarations: [
    App, PrimerComponent, HooksAngular, DeportesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), 
  ],
  bootstrap: [App]
})
export class AppModule { }
