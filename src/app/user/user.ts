export class User {
  id: number;
  name: string;
  subname: string;
  birth: string;
  mobileNumber: number;
  address: string;

  constructor(id: number, name: string, subname: string, birth: string, mobileNumber: number, address: string) {
    this.id = id;
    this.name = name;
    this.subname = subname;
    this.birth = birth;
    this.mobileNumber = mobileNumber;
    this.address = address;
  }
}
