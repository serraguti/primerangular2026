import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { PrimerComponent } from './components/primercomponent/primer.component';
import { HooksAngular } from './components/hooksangular/hooks.angular';
import { DeportesComponent } from './components/deportescomponent/deportes.component';
import { FormsBinding } from './components/formsbinding/forms.binding';
import { FormsObjectModel } from './components/formsobjectmodel/forms.object.model';
import { Testcomponent } from './components/testcomponent/testcomponent';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsBinding,
    FormsObjectModel,
    Testcomponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
