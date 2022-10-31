export class User {
  id: number;
  fname: string;
  lname: string;
  email: string;
  phone: number;
  address: string;
  sal: number;

  constructor(
    id: number,
    fname: string,
    lname: string,
    email: string,
    phone: number,
    address: string,
    sal: number
  ) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.sal = sal;
  }
  fullName = () => {
    return this.lname + ' ' + this.fname;
  };
  yearlySal = () => {
    return this.sal * 12;
  };
}
