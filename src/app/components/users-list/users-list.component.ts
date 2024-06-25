import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input()
  users!: IUser [];
  displayedColumns: string [] = ['name', 'date', 'status']
  @Output()
  onUserSelect = new EventEmitter<IUser>();

  onUserSelected(element: IUser) {
    this.onUserSelect.emit(element);
  }
}
