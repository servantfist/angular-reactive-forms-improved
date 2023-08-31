import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileComponent } from './profile.component';
import {  Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'profile-editor', component: NameEditorComponent },
  { path: 'name-editor', component: ProfileEditorComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    NameEditorComponent,
    ProfileEditorComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
