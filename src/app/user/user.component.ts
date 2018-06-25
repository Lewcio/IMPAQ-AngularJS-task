import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from './user';

@Component({
  selector: '[view-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() onUserEdit: EventEmitter<User>;
  @Output() onUserDelete: EventEmitter<User>;
  @Output() onUserSave: EventEmitter<User>;
  editing = false;
  selected = false;
  constructor() {
    this.onUserEdit = new EventEmitter<User>();
    this.onUserDelete = new EventEmitter<User>();
    this.onUserSave = new EventEmitter<User>();
  }

  ngOnInit() {
  }

  editUser(user: User) {
    this.editing = !this.editing;
    this.onUserEdit.emit(user);
  }

  deleteUser(user: User) {
    this.onUserDelete.emit(user);
  }
}
