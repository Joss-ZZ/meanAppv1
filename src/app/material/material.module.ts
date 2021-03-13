import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MatFileUploadModule } from 'angular-material-fileupload';


@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatFileUploadModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
