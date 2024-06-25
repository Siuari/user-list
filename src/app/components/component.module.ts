import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';
import { PipeModule } from "../pipes/pipe.module";

@NgModule({
    declarations: [
        UserDetailsComponent,
        FilterComponent,
        UsersListComponent
    ],
    imports: [
        AngularMaterialModule,
        CommonModule,
        PipeModule
    ],
    exports: [
        UserDetailsComponent,
        FilterComponent,
        UsersListComponent
    ]
})
export class ComponentModule {

}