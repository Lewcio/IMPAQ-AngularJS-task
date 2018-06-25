import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from './user';

@Component({
  selector: '[view-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() onUserDelete: EventEmitter<User>;
  editing = false;
  selected = false;
  constructor() {
    this.onUserDelete = new EventEmitter<User>();
  }

  ngOnInit() {
  }

  editUser(name: HTMLInputElement, subname: HTMLInputElement, birth: HTMLInputElement, mobileNumber: HTMLInputElement, address: HTMLInputElement): boolean {
    if (name.value.length > 0 && subname.value.length > 0) {
      this.user.name = name.value;
      this.user.subname = subname.value;
      this.user.birth = birth.value;
      this.user.mobileNumber = +mobileNumber.value;
      this.user.address = address.value;
      this.editing = false;
    }
    return false;
  }

  onEditSelected() {
    if (this.selected) {
      this.editing = true;
      this.selected = false;
    }
    console.log(this.editing);
  }

  deleteUser(user: User) {
    this.onUserDelete.emit(user);
  }
}
