import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// components
import { AppComponent } from './app.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { MatrixCellComponent } from './components/matrix-cell/matrix-cell.component';
import { SelectCarDialogComponent } from './utils/dialogs/select-car-dialog/select-car-dialog.component';
// pipes
import {TransformImpactPipe} from './pipes/transform-impact.pipe';
import {TransformProbabilityPipe} from './pipes/transform-probability.pipe';
// material
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    MatrixCellComponent,
    TransformImpactPipe,
    TransformProbabilityPipe,
    SelectCarDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  entryComponents: [
      SelectCarDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
