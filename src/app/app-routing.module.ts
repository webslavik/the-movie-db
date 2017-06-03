import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'movies-list', pathMatch: 'full' },
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
