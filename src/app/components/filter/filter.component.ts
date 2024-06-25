import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };

  statusValues = [
    {description: 'Ativo', value: true },
    {description: 'Inativo', value: false },
  ];

  @Output('onFilter') 
  onFilterEmitter = new EventEmitter<IFilterOptions>();

  onFilterClick() {
    this.onFilterEmitter.emit(this.filterOptions);
  }

  onCleanFilterClick() {
    this.filterOptions.name = undefined;
    this.filterOptions.startDate = undefined;
    this.filterOptions.endDate = undefined;
    this.filterOptions.status = undefined;
    this.onFilterEmitter.emit(this.filterOptions);
  }
}
