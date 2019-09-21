import { NgModule } from '@angular/core';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
    declarations: [
        RightPanelComponent,
        SnippetComponent,
        TopMenuComponent,
    ],
    imports: [
        
    ],
    exports: [
        RightPanelComponent,
        SnippetComponent,
        TopMenuComponent,
    ]
})
export class SharedModule { }
