import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnippetComponent } from './pages/karenda-project/components/snippet/snippet.component';
import { RightPanelComponent } from './pages/karenda-project/components/right-panel/right-panel.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    SnippetComponent,
    RightPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
