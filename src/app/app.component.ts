import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser;
  userList: IUser[] = [];
  userFilteredList: IUser[] = [];
  isUserSelected: boolean = false;

  ngOnInit(): void {
    this.userList = UsersList;
    this.userFilteredList = this.userList;
  }

  onUserSelected(user: IUser) {
    console.log(user)
    this.userSelected = user;
    this.isUserSelected = true;
  }

  onFilter(filter: IFilterOptions) {
    this.userFilteredList = this.filterUsersByName(this.userList, filter.name);
    this.userFilteredList = this.filterUsersByDate(this.userFilteredList, filter.startDate, filter.endDate);
    this.userFilteredList = this.filterUsersByStatus(this.userFilteredList, filter.status);
  }

  private filterUsersByName(users: IUser[], name: string | undefined) : IUser[] {
    const NAME_NOT_TYPED = name === undefined || name.trim() === "";

    if (NAME_NOT_TYPED)
      return users;

    return users.filter(x => x.nome.toLowerCase().includes(name.toLowerCase()));
  }

  private filterUsersByDate(users: IUser[], startDate: Date | undefined, endDate: Date | undefined) : IUser[] {
    const INVALID_DATE_INTERVAL = startDate === undefined || endDate === undefined;

    if (INVALID_DATE_INTERVAL)
      return users;

    return users.filter(x => isWithinInterval(new Date(x.dataCadastro), { start: startDate, end: endDate }));
  }

  private filterUsersByStatus(users: IUser[], status: boolean | undefined) : IUser[] {
    const STATUS_NOT_TYPED = status === undefined;

    if (STATUS_NOT_TYPED)
      return users;

    return users.filter(x => x.ativo === status);
  }
}
