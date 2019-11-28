import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasichighlighterDirective } from './BasicHighlighter/basichighlighter.directive';
import { AdvancedHighlighterDirective } from './AdvancedHighlighter/advanced-highlighter.directive';
import { UnlessDirective } from './CustomStructuralDirective/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasichighlighterDirective,
    AdvancedHighlighterDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
