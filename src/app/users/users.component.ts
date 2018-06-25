import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {User} from '../user/user';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User;
  usersUrl = 'assets/users.json';
  @ViewChildren(UserComponent) userComponent: QueryList<UserComponent>;

  constructor(private http: HttpClient) {
    this.users = [new User(0, '', '', '', 0, '')];
    http.get(this.usersUrl)
      .subscribe((data: User[]) => this.users = data);
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  onEditSelected() {
    this.userComponent.forEach((child) => {child.onEditSelected()});
  }

  ngOnInit() {
  }

}
