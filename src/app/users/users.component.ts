import {Component, OnInit} from '@angular/core';
import {User} from '../user/user';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User;
  usersUrl = 'assets/users.json';
  editSelected = false;

  constructor(private http: HttpClient) {
    http.get(this.usersUrl)
      .subscribe((data: User[]) => this.users = data);
  }


  editUser(user: User) {
    console.log('editing ' + user.id);
  }

  deleteUser(user: User) {
    let index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  ngOnInit() {
  }

}
