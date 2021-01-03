import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'pdf',
        component: ContentComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
