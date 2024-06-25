import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list"
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        FormsModule,
        MatButtonModule,
        MatTableModule
    ],
    providers: [provideNativeDateAdapter()],
    exports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        FormsModule,
        MatButtonModule,
        MatTableModule
    ]
})
export class AngularMaterialModule {

}