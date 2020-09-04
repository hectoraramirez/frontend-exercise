import { NgModule } from '@angular/core';

// Modulos del angular para los componetes
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';

// Importacion del CDK para aplicar el scroll de los catalogos
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    ScrollingModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    ScrollingModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule { }
